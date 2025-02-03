import { getCustomRepository } from "typeorm";
import { ValidaCardapio } from "../../utils/functions";
import { ViewGruposAddRep } from "../../repositories/ViewGrupoAdicionais";

interface iCliProds {
    opt_cod_cliente: string;
    opt_cod_grupo: string;
}

class ConsultaGrupoAdicionais {
    async execute({ opt_cod_cliente, opt_cod_grupo }: iCliProds) {
        const Valida = new ValidaCardapio();
        const bUsaCardapio = await Valida.execute({ opt_cod_cliente });
        if (!bUsaCardapio) {
            throw new Error("Cardápio Digital Indisponível Adicionais");
        }
        // console.log(opt_cod_cliente)
        // console.log(opt_cod_grupo)
        const addsRep = getCustomRepository(ViewGruposAddRep);

        const Adds = await addsRep.find({
            where: {
                cod_cliente: opt_cod_cliente,
                cod_grupo_produto: opt_cod_grupo
            },
            order: {
                grupo_personalizacao: "ASC",
            },
            // relations: ["Itens"],
        });
        return Adds;
    }
}

export { ConsultaGrupoAdicionais };
