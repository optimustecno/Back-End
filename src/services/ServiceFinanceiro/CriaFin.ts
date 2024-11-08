import { getCustomRepository } from "typeorm";
import { FinanceiroRep } from "../../repositories/FinanceiroRep";

interface iFin {
    opt_seq_contrato: string;
    opt_cod_cliente: string;
    vencimento: Date;
    valor: number;
    parcela: string;
    tipo: string;
    identificador: string;
}
class ServiceCriaFinanceiro {
    async execute({
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

        const verCont = await finRep.findOne({
            opt_seq_contrato,
            vencimento,
        });

        if (verCont) {
            throw new Error("Financeiro já criado");
        }
        const _financeiro = await finRep.create({
            opt_seq_contrato,
            opt_cod_cliente,
            vencimento: dataCria,
            valor,
            parcela,
            tipo,
            pago: "0",
            identificador,
        });

        await finRep.save(_financeiro);

        const finCriado = await finRep.findOne({
            opt_seq_contrato,
            vencimento,
        });

        return finCriado;
    }
}

export { ServiceCriaFinanceiro };
