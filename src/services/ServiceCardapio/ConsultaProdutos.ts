import { getCustomRepository } from "typeorm";
import { ProdCardapioRep } from "../../repositories/ProdutosCardapioRep";

interface iCliProds {
    opt_cod_cliente: string;
}

class ConsultaProdutos {
    async execute({ opt_cod_cliente }: iCliProds) {
        const prodsRep = getCustomRepository(ProdCardapioRep);

        const Prods = await prodsRep.find(
            { opt_cod_cliente }
        );

        return Prods;
    }
}

export { ConsultaProdutos };
