import { getCustomRepository } from "typeorm";
import { ViewAddRep } from "../../repositories/ViewAdicionaisRep";

interface iProdsDev {
    id_cliente: string;
}

class ServiceAddCardapio {
    async execute({ id_cliente }: iProdsDev) {
        const prodsRep = getCustomRepository(ViewAddRep);

        const Items = await prodsRep.find({
            where: { id_cliente },
            select: [
                "id_cliente",
                "codigo_adicional",
                "nome",
                "valor",
                "aceita_quantidade",
                "exibir",
                "cod_grupo_adicional",
            ],
        });

        return Items;
    }
}

export { ServiceAddCardapio };