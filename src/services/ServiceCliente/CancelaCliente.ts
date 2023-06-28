import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../../repositories/ClienteRep";

interface iCancelamento {
    opt_cod_cliente: string;
    data_cancelamento: string;
}

class ServiceCancelaCli {
    async execute({ opt_cod_cliente, data_cancelamento }: iCancelamento) {
        const clientesRep = getCustomRepository(ClientesRep);

        if (!opt_cod_cliente) {
            throw new Error("Código do Cliente Não Informado");
        }

        const _cliente = await clientesRep.update(
            { opt_cod_cliente: opt_cod_cliente },
            {
                data_cancelamento,
            }
        );

        if (data_cancelamento === "0000-00-00") {
            return {
                message: "Cliente Reativado",
            };
        } else {
            return {
                message: "Cliente Cancelado",
            };
        }
    }
}

export { ServiceCancelaCli };
