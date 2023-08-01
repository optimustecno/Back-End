import { getCustomRepository } from "typeorm";
import { FinanceiroRep } from "../../repositories/FinanceiroRep";

interface iFin {
    seq: string;
}
class ServiceConsultaParcela {
    async execute({ seq }: iFin) {
        const finRep = getCustomRepository(FinanceiroRep);

        const verCont = await finRep.findOne({
            seq,
        });

        if (!verCont) {
            throw new Error("Financeiro Não Encontrado!");
        }

        return verCont;
    }
}

export { ServiceConsultaParcela };
