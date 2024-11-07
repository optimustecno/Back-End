import { getCustomRepository } from "typeorm";
import { FinanceiroRep } from "../../repositories/FinanceiroRep";
import { Espera } from "../../utils/functions";

interface iFin {
    seq: string;
    data_pagamento: Date;
}
class ServiceQuitaFinanceiro {
    async execute({ seq, data_pagamento }: iFin) {
        const finRep = getCustomRepository(FinanceiroRep);

        var dataPag = `${data_pagamento} 00:00:01`;

        const _financeiro = await finRep.update(
            { seq: seq },
            {
                data_pagamento: dataPag,
                pago: "1",
            }
        );

        Espera(150);

        const finAtual = await finRep.findOne({
            seq,
        });

        return finAtual;
    }
}

export { ServiceQuitaFinanceiro };
