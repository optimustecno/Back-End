import { getCustomRepository } from "typeorm";
import { GrupoProdRep } from "../../repositories/GrupoProdRep";

interface iCliProds {
    opt_cod_cliente: string;
    cod_grupo: string;
    nome_grupo: string;
    aceita_meio_a_meio: string;
    preco: Number;
    ordem: string;
}

class GravaGruposDev {
    async execute({
        opt_cod_cliente,
        cod_grupo,
        nome_grupo,
        aceita_meio_a_meio,
        preco,
        ordem,
    }: iCliProds) {
        const gruposRep = getCustomRepository(GrupoProdRep);

        if (!opt_cod_cliente) {
            throw new Error("Não Foi Informado o Código de Cliente!");
        }
        if (!cod_grupo) {
            throw new Error("Não Foi Informado o Código do Grupo!");
        }
        if (!nome_grupo) {
            throw new Error("Não Foi Informado o Nome do Grupo!");
        }

        const TestaCad = await gruposRep.findOne({
            opt_cod_cliente,
            cod_grupo
        });

        if (TestaCad) {
            throw new Error("Grupo Existente!");
        }

        const _grupo = await gruposRep.create({
            opt_cod_cliente,
            cod_grupo,
            nome_grupo,
            aceita_meio_a_meio,
            preco,
            ordem,
        });

        await gruposRep.save(_grupo);

        const grupoCad = await gruposRep.findOne({
            opt_cod_cliente,
            cod_grupo
        });

        return grupoCad;
    }
}

export { GravaGruposDev };