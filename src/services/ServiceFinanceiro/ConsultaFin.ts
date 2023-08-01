import { getCustomRepository } from "typeorm";
import { FinanceiroRep } from "../../repositories/FinanceiroRep";

interface iFin {
    opt_seq_contrato: string;
}
class ServiceConsultaFinanceiro {
    async execute({ opt_seq_contrato }: iFin) {
        const finRep = getCustomRepository(FinanceiroRep);

        const verCont = await finRep.find({
            opt_seq_contrato,
        });

        if (!verCont) {
            throw new Error("Financeiro Não Encontrado!");
        }

        return verCont;
    }
}

export { ServiceConsultaFinanceiro };
