import { getCustomRepository } from "typeorm";
import { FinanceiroRep } from "../../repositories/FinanceiroRep";

interface iFin {
    seq: string;
    opt_seq_contrato: string;
    opt_cod_cliente: string;
    vencimento: Date;
    valor: number;
    parcela: string;
    tipo: string;
    identificador: string;
}
class ServiceAtualizaFinanceiro {
    async execute({
        seq,
        opt_seq_contrato,
        opt_cod_cliente,
        vencimento,
        valor,
        parcela,
        tipo,
        identificador,
    }: iFin) {
        const finRep = getCustomRepository(FinanceiroRep);

        var dataCria = `${vencimento} 00:00:01`;

        const _financeiro = await finRep.update(
            { seq: seq },
            {
                opt_seq_contrato,
                opt_cod_cliente,
                vencimento: dataCria,
                valor,
                parcela,
                tipo,
                identificador,
            }
        );

        const finAtual = await finRep.findOne({
            seq,
        });

        return finAtual;
    }
}

export { ServiceAtualizaFinanceiro };
