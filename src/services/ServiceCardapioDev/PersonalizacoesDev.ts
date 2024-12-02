import { getCustomRepository, Like } from "typeorm";
import { GrupoProdRep } from "../../repositories/GrupoProdRep";

interface iCliProds {
    opt_cod_cliente: string;
    cod_grupo?: any;
}

class ConsultaPersonalizacoesDev {
    async execute({ opt_cod_cliente, cod_grupo }: iCliProds) {
        const grupoProdRep = getCustomRepository(GrupoProdRep);

        if (!cod_grupo) {
            cod_grupo = "";
        }

        // const adicionais = await grupoProdRep.find({
        //     where: { opt_cod_cliente, cod_grupo: Like(`%${cod_grupo}%`) },
        //     relations: ["Personalizacoes", "Personalizacoes.Itens"],
        //     select: ["opt_grupos_cardapio.seq",
        //         "opt_grupos_cardapio.nome_grupo",
        //         "Personalizacoes.cod_grupo_adicional",
        //         "Personalizacoes.grupo_personalizacao",
        //         "Personalizacoes.exibir",
        //         "Itens.codigo_adicional", 
        //         "Itens.nome",
        //         "Itens.valor",
        //         "Itens.aceita_quantidade",
        //         "Itens.exibir"],
        // });

        const adicionais = await grupoProdRep
            .createQueryBuilder("opt_grupos_cardapio")
            .where("opt_grupos_cardapio.opt_cod_cliente = :opt_cod_cliente", { opt_cod_cliente })
            .andWhere("opt_grupos_cardapio.cod_grupo Like :codigo", {
                codigo: "%" + cod_grupo + "%",
            })
            .leftJoinAndSelect("opt_grupos_cardapio.Personalizacoes", "Personalizacoes")
            .leftJoinAndSelect("Personalizacoes.Itens", "Itens")
            .select([
                "opt_grupos_cardapio.seq",
                "opt_grupos_cardapio.nome_grupo",
                "Personalizacoes.cod_grupo_adicional",
                "Personalizacoes.grupo_personalizacao",
                "Personalizacoes.exibir",
                "Itens.codigo_adicional", 
                "Itens.nome",
                "Itens.valor",
                "Itens.aceita_quantidade",
                "Itens.exibir"
            ])
        .getMany();

        return adicionais;
    }
}

export { ConsultaPersonalizacoesDev };
