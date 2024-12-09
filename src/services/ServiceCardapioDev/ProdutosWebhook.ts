import { getCustomRepository } from "typeorm";
import { ViewProdRep } from "../../repositories/ViewProdutosRep";

interface iProdsDev {
    id_cliente: string;
}

class ServiceProdutosWebhook {
    async execute({ id_cliente }: iProdsDev) {
        const prodsRep = getCustomRepository(ViewProdRep);

        const Items = await prodsRep.find({ 
            where: {id_cliente, webhook: "0"}, 
            select:["id_cliente",
                "cod_produto",
                "grupo",
                "produto",
                "descricao",
                "valor",
                "ordem",
                "exibir",
                "cod_grupo"]
        })

        return Items;
    }
}

export { ServiceProdutosWebhook };
