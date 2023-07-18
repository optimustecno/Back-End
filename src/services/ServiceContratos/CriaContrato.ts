import { getCustomRepository } from "typeorm";
import { ContratoRep } from "../../repositories/ContratoRep";

interface iContrato {
    opt_cod_cliente: string;
    data: string;
    vencimento: string;
    tx_instalacao?: number;
    venc_instalacao?: string;
    inicio_mens: string;
    valor_mens: number;
    percentual: number;
    base_calculo: number;
    ativo?: string;
}
class ServiceCriaContrato {
    async execute({
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

        var dataCria = `${data} 00:00:01`;

        const verCont = await contratosRep.findOne({
            opt_cod_cliente,
            data,
        });

        if (verCont) {
            throw new Error("Contrato já criado");
        }
        const _contrato = await contratosRep.create({
            opt_cod_cliente,
            data: dataCria,
            vencimento,
            tx_instalacao,
            venc_instalacao,
            inicio_mens,
            valor_mens,
            percentual,
            base_calculo,
            ativo,
        });

        await contratosRep.save(_contrato);

        const contratoCriado = await contratosRep.findOne({
            opt_cod_cliente,
            data,
        });

        return contratoCriado;
    }
}

export { ServiceCriaContrato };
