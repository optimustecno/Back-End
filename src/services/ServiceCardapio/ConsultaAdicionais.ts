import { getCustomRepository } from "typeorm";
import { ValidaCardapio } from "../../utils/functions";
import { ViewAddRep } from "../../repositories/ViewAdicionaisRep";

interface iCliProds {
    opt_cod_cliente: string;
    opt_cod_grupo: string;
    uid_cliente: string;
}

class ConsultaAdicionais {
    async execute({ opt_cod_cliente, opt_cod_grupo, uid_cliente }: iCliProds) {
        const Valida = new ValidaCardapio();
        const bUsaCardapio = await Valida.execute({ opt_cod_cliente });
        if (!bUsaCardapio) {
            throw new Error("Cardápio Digital Indisponível Adicionais");
        }

        const addsRep = getCustomRepository(ViewAddRep);

        const Adds = await addsRep.find({
            where: {
                id_cliente: uid_cliente,
                cod_grupo_adicional: opt_cod_grupo
            },
            order: {
                nome: "ASC",
            },
        });
        return Adds;
    }
}

export { ConsultaAdicionais };
