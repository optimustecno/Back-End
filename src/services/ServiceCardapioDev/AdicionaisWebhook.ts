import { getCustomRepository } from "typeorm";
import { ViewAddRep } from "../../repositories/ViewAdicionaisRep";

interface iProdsDev {
    id_cliente: string;
}

class ServiceAddWebhook {
    async execute({ id_cliente }: iProdsDev) {
        const prodsRep = getCustomRepository(ViewAddRep);

        const Items = await prodsRep.find({
            where: { id_cliente, webhook: "0" },
            select: [
                "codigo_adicional",
                "nome",
                "valor",
                "aceita_quantidade",
                "exibir",
                "cod_grupo_adicional",
            ],
        });
        // console.log(Items)
        return Items;
    }
}

export { ServiceAddWebhook };
