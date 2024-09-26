import { getCustomRepository } from "typeorm";
import { ProdCardapioRep } from "../../repositories/ProdutosCardapioRep"; 


interface iCliProds {
    opt_cod_cliente: string;
    cod_grupo: string;
}

class ConsultaProdutosDev {
    async execute({ opt_cod_cliente, cod_grupo }: iCliProds) {

        const produtosRep = getCustomRepository(ProdCardapioRep);

        const Grupos = await produtosRep.find(
            { opt_cod_cliente, cod_grupo }
        );

        return Grupos;
    }
}

export { ConsultaProdutosDev };
