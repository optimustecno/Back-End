import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../../repositories/ClienteRep";

interface iLincenca {
    opt_cod_cliente: string;
    opt_bloqueado: string;
    opt_mensagem_licenca: string;
}

class ServiceAtualizaLicenca {
    async execute({
        opt_cod_cliente,
        opt_bloqueado,
        opt_mensagem_licenca,
    }: iLincenca) {
        const clientesRep = getCustomRepository(ClientesRep);

        if (!opt_cod_cliente) {
            throw new console.error("Código do Cliente Não Informado");
        }

        const _cliente = await clientesRep.update(
            { opt_cod_cliente: opt_cod_cliente },
            {
                opt_bloqueado,
                opt_mensagem_licenca,
            }
        );

        return {
            opt_bloqueado,
            opt_mensagem_licenca,
        };
    }
}

export { ServiceAtualizaLicenca };
