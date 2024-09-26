import { getCustomRepository } from "typeorm";
import { GrupoProdRep } from "../../repositories/GrupoProdRep";


interface iCliProds {
    opt_cod_cliente: string;
    inclui_produtos?: boolean;
}

class ConsultaGruposDev {
    async execute({ opt_cod_cliente, inclui_produtos }: iCliProds) {

        const gruposRep = getCustomRepository(GrupoProdRep);
        var Grupos;

        // console.log(inclui_produtos)

        if(inclui_produtos){
            Grupos = await gruposRep.find({ 
                where: {opt_cod_cliente},
                relations:["produtos"]    
                }
            );
        }
        else{
            Grupos = await gruposRep.find(
                { where: {opt_cod_cliente} }
            );
        } 
        return Grupos;
    }
}

export { ConsultaGruposDev };
