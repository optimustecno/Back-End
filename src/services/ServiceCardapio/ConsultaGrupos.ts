import { getCustomRepository } from "typeorm";
import { ValidaCardapio } from "../../utils/functions";
import { ViewGruposProdRep } from "../../repositories/ViewGrupoProdRep";

interface iCliProds {
    opt_cod_cliente: string;
}

class ConsultaGrupos {
    async execute({ opt_cod_cliente }: iCliProds) {
        const Valida = new ValidaCardapio();
        const bUsaCardapio = await Valida.execute({ opt_cod_cliente });
        if (!bUsaCardapio) {
            throw new Error("Cardápio Digital Indisponível Grupo");
        }

        const gruposRep = getCustomRepository(ViewGruposProdRep);

        const Grupos = await gruposRep.find({
            where: { id_cliente: opt_cod_cliente },
            order: { nome_grupo: "ASC" },
        });

        return Grupos;
    }
}

export { ConsultaGrupos };
