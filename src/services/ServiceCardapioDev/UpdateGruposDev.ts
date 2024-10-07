import { getCustomRepository } from "typeorm";
import { GrupoProdRep } from "../../repositories/GrupoProdRep";

interface iCliProds {
    seq: string;
    opt_cod_cliente: string;
    cod_grupo: string;
    nome_grupo: string;
    aceita_meio_a_meio: string;
    preco: string;
    ordem: string;
    exibir: string;
}

class UpdateGrupoDev {
    async execute({
        seq,
        opt_cod_cliente,
        cod_grupo,
        nome_grupo,
        aceita_meio_a_meio,
        preco,
        ordem,
        exibir,
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

        const _grupo = await gruposRep.update(
            { seq },
            {
                opt_cod_cliente,
                cod_grupo,
                nome_grupo,
                aceita_meio_a_meio,
                preco,
                ordem,
                exibir,
            }
        );

        return _grupo;
    }
}

export { UpdateGrupoDev };
