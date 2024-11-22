import { getCustomRepository } from "typeorm";
import { NotasVersaoRep } from "../../repositories/NotasVersaoRep";

interface iAtNota {
    seq: string;
    opt_codigo_desenvolvedor: string;
    opt_codigo_tester: string;
    opt_status: string;
    opt_sistema: string;
    opt_versao: string;
    opt_descricao: string;
    opt_observacao: string;
    opt_aprovado: string;
    opt_lancamento: string;
}

class ServiceAtualizaNota {
    async execute({
        seq,
        opt_codigo_desenvolvedor,
        opt_codigo_tester,
        opt_status,
        opt_sistema,
        opt_versao,
        opt_descricao,
        opt_observacao,
        opt_aprovado,
        opt_lancamento,
    }: iAtNota) {
        const notaRep = getCustomRepository(NotasVersaoRep);

        const _nota = await notaRep.update(
            { seq },
            {
                opt_codigo_desenvolvedor,
                opt_codigo_tester,
                opt_status,
                opt_sistema,
                opt_versao,
                opt_descricao,
                opt_observacao,
                opt_aprovado,
                opt_lancamento,
            }
        );

        return {
            seq,
            opt_codigo_desenvolvedor,
            opt_codigo_tester,
            opt_status,
            opt_sistema,
            opt_versao,
            opt_descricao,
            opt_observacao,
            opt_aprovado,
            opt_lancamento,
        };
    }
}
export { ServiceAtualizaNota };
