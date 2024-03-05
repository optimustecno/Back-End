import { getCustomRepository } from "typeorm";
import { ProdCardapioRep } from "../../repositories/ProdutosCardapioRep";

interface iCliProds {
    opt_cod_cliente: string;
}

class ConsultaProdutos {
    async execute({ opt_cod_cliente }: iCliProds) {
        const prodsRep = getCustomRepository(ProdCardapioRep);

        const Prods = await prodsRep.find({
            where: {
                opt_cod_cliente,
            },
            order: {
                ordem: "ASC",
            },
        });
        return Prods;
    }
}

export { ConsultaProdutos };
