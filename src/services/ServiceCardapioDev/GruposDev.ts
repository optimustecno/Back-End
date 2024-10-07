import { getCustomRepository, Like } from "typeorm";
import { GrupoProdRep } from "../../repositories/GrupoProdRep";

interface iCliProds {
    opt_cod_cliente: string;
    inclui_produtos?: boolean;
    grupos_ativos?: any;
    produtos_ativos?: any;
}

class ConsultaGruposDev {
    async execute({ opt_cod_cliente, inclui_produtos, grupos_ativos }: iCliProds) {
        const gruposRep = getCustomRepository(GrupoProdRep);
        var Grupos;

        // console.log(inclui_produtos)
        if (!grupos_ativos) {
            grupos_ativos = "";
        }
        
        if (inclui_produtos) {
            Grupos = await gruposRep.find({
                where: {
                    opt_cod_cliente,
                    exibir: Like(`%${grupos_ativos}%`),
                },
                relations: ["produtos"],
            });
        } else {
            Grupos = await gruposRep.find({
                where: { opt_cod_cliente, exibir: Like(`%${grupos_ativos}%`) },
            });
        }
        return Grupos;
    }
}

export { ConsultaGruposDev };
