import { getCustomRepository } from "typeorm";
import { GrupoPersonalizaRep } from "../../repositories/GrupoPersonalizaRep";

interface iDevGruposPersonalizacao {
    cod_cliente: string;
    id_cliente: string;
}

class ConsultaGruposPersonalizacaoDev {
    async execute({ cod_cliente, id_cliente }: iDevGruposPersonalizacao) {
        const personalizaRep = getCustomRepository(GrupoPersonalizaRep);

        // const Grupos = await personalizaRep.find({ opt_cod_cliente: cod_cliente });

        // console.log(id_cliente)
        const Grupos = await personalizaRep
            .createQueryBuilder("opt_grupo_personalizacao")
            .setParameter("id_cliente", id_cliente)
            .where("opt_cod_cliente = :cod_cliente", { cod_cliente })
            .select([
                ":id_cliente as id_cliente",
                "seq as cod_grupo_adicional",
                "nome",
                "exibir",
            ])
            .getRawMany();

        return Grupos;
    }
}

export { ConsultaGruposPersonalizacaoDev };
