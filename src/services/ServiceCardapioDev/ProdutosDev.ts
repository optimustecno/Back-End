import { getCustomRepository } from "typeorm";
import { ViewProdRep } from "../../repositories/ViewProdutosRep"; 


interface iCliProds {
    opt_cod_cliente: string;
    cod_grupo: string;
    id_cliente: string;
}

class ConsultaProdutosDev {
    async execute({ opt_cod_cliente, cod_grupo, id_cliente }: iCliProds) {

        const produtosRep = getCustomRepository(ViewProdRep);

        const Grupos = await produtosRep.find(
            { id_cliente, cod_grupo }
        );

        return Grupos;
    }
}

export { ConsultaProdutosDev };
