import { getCustomRepository } from "typeorm";
import { ValidaCardapio } from "../../utils/functions";
import { ProdCardapioRep } from "../../repositories/ProdutosCardapioRep";

interface iCliProds {
    opt_cod_cliente: string;
}

class ConsultaProdutos {
    async execute({ opt_cod_cliente }: iCliProds) {
        const Valida = new ValidaCardapio();
        const bUsaCardapio = await Valida.execute({ opt_cod_cliente });
        if (!bUsaCardapio) {
            throw new Error("Cardápio Digital Indisponível produto");
        }

        const prodsRep = getCustomRepository(ProdCardapioRep);

        const Prods = await prodsRep.find({
            where: {
                opt_cod_cliente,
            },
            order: {
                grupo: "ASC",
                produto: "ASC"
            },
        });
        return Prods;
    }
}

export { ConsultaProdutos };
