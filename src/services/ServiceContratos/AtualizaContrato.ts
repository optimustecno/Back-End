import { getCustomRepository } from "typeorm";
import { ContratoRep } from "../../repositories/ContratoRep";

interface iContrato {
    seq: string;
    opt_cod_cliente: string;
    data: Date;
    vencimento: string;
    tx_instalacao?: number;
    venc_instalacao?: Date;
    inicio_mens: Date;
    valor_mens: number;
    percentual: number;
    base_calculo: number;
    ativo?: string;
}

class ServiceAtualizaContrato {
    async execute({
        seq,
        opt_cod_cliente,
        data,
        vencimento,
        tx_instalacao,
        venc_instalacao,
        inicio_mens,
        valor_mens,
        percentual,
        base_calculo,
        ativo,
    }: iContrato) {
        const contratosRep = getCustomRepository(ContratoRep);

        const verCont = await contratosRep.findOne({
            seq,
        });

        if (!verCont) {
            throw new Error("Contrato Não Encontrado");
        }

        const _contrato = await contratosRep.update(
            { seq: seq },
            {
                opt_cod_cliente,
                data,
                vencimento,
                tx_instalacao,
                venc_instalacao,
                inicio_mens,
                valor_mens,
                percentual,
                base_calculo,
                ativo,
            }
        );

        const contratoAtualizado = await contratosRep.findOne({
            seq,
        });

        return contratoAtualizado;
    }
}

export { ServiceAtualizaContrato };
