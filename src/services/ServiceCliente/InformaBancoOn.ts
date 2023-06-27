import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../../repositories/ClienteRep";

interface iAcessoEmpresas {
    opt_cod_cliente: string;
    opt_dns: string;
    opt_banco: string;
    opt_user: string;
    opt_password: string;
    opt_odbc: string;
}

class ServiceInformaBancoOn {
    async execute({
        opt_cod_cliente,
        opt_dns,
        opt_banco,
        opt_user,
        opt_password,
        opt_odbc,
    }: iAcessoEmpresas) {
        const clientesRep = getCustomRepository(ClientesRep);

        if (!opt_cod_cliente) {
            throw new console.error("Código do Cliente Não Informado");
        }

        const _cliente = await clientesRep.update(
            { opt_cod_cliente: opt_cod_cliente },
            {
                opt_dns,
                opt_banco,
                opt_user,
                opt_password,
                opt_odbc,
            }
        );
        return {
            message: "Dados Atualizados",
        };
    }
}

export { ServiceInformaBancoOn };
