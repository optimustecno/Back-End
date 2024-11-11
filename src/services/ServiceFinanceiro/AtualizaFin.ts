import { getCustomRepository } from "typeorm";
import { FinanceiroRep } from "../../repositories/FinanceiroRep";

interface iFin {
    seq: string;
    vencimento: Date;
    valor: number;
    parcela: string;
    tipo: string;
    identificador: string;
}
class ServiceAtualizaFinanceiro {
    async execute({
        seq,
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
