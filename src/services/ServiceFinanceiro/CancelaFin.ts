
import { FinanceiroRep } from "../../repositories/FinanceiroRep";

interface iFin {
    seq: string;
    data_pagamento: Date;
}
class ServiceCancelaFinanceiro {
    async execute({ seq, data_pagamento }: iFin) {
        const finRep = FinanceiroRep;

        var dataPag = `${data_pagamento} 00:00:01`;

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

export { ServiceCancelaFinanceiro };
