import { getCustomRepository } from "typeorm";
import { ValidaCardapio } from "../../utils/functions";
import { ViewGruposProdRep } from "../../repositories/ViewGrupoProdRep";


interface iCliProds {
    opt_cod_cliente: string;
}

class ConsultaGrupos {
    async execute({ opt_cod_cliente }: iCliProds) {
        
        const Valida = new ValidaCardapio();
        const bUsaCardapio = await Valida.execute({opt_cod_cliente})
        if (!bUsaCardapio){
            throw new Error("Cardápio Digital Indisponível");
        }

        const gruposRep = getCustomRepository(ViewGruposProdRep);

        const Grupos = await gruposRep.find(
            { opt_cod_cliente }
        );

        return Grupos;
    }
}

export { ConsultaGrupos };
