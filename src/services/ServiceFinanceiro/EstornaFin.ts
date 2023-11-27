
import { FinanceiroRep } from "../../repositories/FinanceiroRep";

interface iFin {
    seq: string;
}
class ServiceEstornaFinanceiro {
    async execute({ seq }: iFin) {
        const finRep = FinanceiroRep;

        var dataPag = ``;

        const _financeiro = await finRep.update(
            { seq: seq },
            {
                data_pagamento: dataPag,
                pago: "0",
            }
        );

        const finAtual = await finRep.findOne({
            seq,
        });

        return finAtual;
    }
}

export { ServiceEstornaFinanceiro };
