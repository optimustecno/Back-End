import { getCustomRepository, Like } from "typeorm";
import { ViewProdRep } from "../../repositories/ViewProdutosRep";

interface iCliProds {
    opt_cod_cliente: string;
    cod_grupo: string;
    id_cliente: string;
}

class ConsultaProdutosDev {
    async execute({ opt_cod_cliente, cod_grupo, id_cliente }: iCliProds) {
        const produtosRep = getCustomRepository(ViewProdRep);
        if (!cod_grupo) {
            cod_grupo = "";
        }

        const Grupos = await produtosRep.find({
            where: { id_cliente, cod_grupo: Like(`%${cod_grupo}%`) },
            select: [
                "id_cliente",
                "cod_produto",
                "grupo",
                "produto",
                "descricao",
                "valor",
                "ordem",
                "exibir",
                "cod_grupo",
            ],
        });

        return Grupos;
    }
}

export { ConsultaProdutosDev };
