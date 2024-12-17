import { getCustomRepository, Like } from "typeorm";
import { GrupoProdRep } from "../../repositories/GrupoProdRep";
import { ViewGruposProdRep } from "../../repositories/ViewGrupoProdRep";

interface iCliProds {
    opt_cod_cliente: string;
    inclui_produtos?: boolean;
    grupos_ativos?: any;
    produtos_ativos?: any;
    id_cliente: string;
}

class ConsultaGruposDev {
    async execute({ opt_cod_cliente, inclui_produtos, grupos_ativos, id_cliente }: iCliProds) {
        const gruposRep = getCustomRepository(GrupoProdRep);
        const viewGruposRep = getCustomRepository(ViewGruposProdRep)
        var Grupos;

        // console.log(inclui_produtos)
        if (!grupos_ativos) {
            grupos_ativos = "";
        }
        
        if (inclui_produtos) {
            Grupos = await viewGruposRep.find({
                where: {
                    id_cliente,
                    exibir: Like(`%${grupos_ativos}%`),
                },
                relations: ["produtos"],
                select:[]
            });
        } else {
            // console.log(id_cliente)
            Grupos = await viewGruposRep.find({
                where: { id_cliente: id_cliente, exibir: Like(`%${grupos_ativos}%`) },
            });
        }
        return Grupos;
    }
}

export { ConsultaGruposDev };
