import { getCustomRepository } from "typeorm";
import { ValidaCardapio } from "../../utils/functions";
import { ViewGruposProdRep } from "../../repositories/ViewGrupoProdRep";

interface iCliProds {
    opt_cod_cliente: string;
    uid_cliente: string;
}

class ConsultaGrupos {
    async execute({ opt_cod_cliente, uid_cliente }: iCliProds) {
        const Valida = new ValidaCardapio();
        const bUsaCardapio = await Valida.execute({ opt_cod_cliente });
        if (!bUsaCardapio) {
            throw new Error("Cardápio Digital Indisponível Grupo");
        }

        const gruposRep = getCustomRepository(ViewGruposProdRep);

        const Grupos = await gruposRep.find({
            where: { id_cliente: uid_cliente, exibir:"1" },
            order: { nome_grupo: "ASC" },
        });

        return Grupos;
    }
}

export { ConsultaGrupos };
