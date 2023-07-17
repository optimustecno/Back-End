import { getCustomRepository } from "typeorm";
import { ContratoRep } from "../../repositories/ContratoRep";
import { ServiceCancelaCli } from "../ServiceCliente";

interface iContrato {
    seq: string;
    data_cancelamento: string;
}

class ServiceCancelaContrato {
    async execute({ seq, data_cancelamento }: iContrato) {
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
                ativo: "0",
                data_cancelamento,
            }
        );

        const cancelaCli = new ServiceCancelaCli();

        const contratoAtualizado = await contratosRep.findOne({
            seq,
        });

        const { opt_cod_cliente } = contratoAtualizado;

        const cliCanc = await cancelaCli.execute({
            opt_cod_cliente,
            data_cancelamento,
        });

        return contratoAtualizado;
    }
}

export { ServiceCancelaContrato };
