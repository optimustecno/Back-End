import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../../repositories/ClienteRep";

interface iCredWabiz {
    opt_cod_cliente: string;
    opt_login_wabiz: string;
    opt_acesso_wabiz: string;
}

class ServiceCredenciaisWabiz {
    async execute({
        opt_cod_cliente,
        opt_login_wabiz,
        opt_acesso_wabiz,
    }: iCredWabiz) {
        const clientesRep = getCustomRepository(ClientesRep);

        if (!opt_cod_cliente) {
            throw new console.error("Código do Cliente Não Informado");
        }

        const _cliente = await clientesRep.update(
            { opt_cod_cliente: opt_cod_cliente },
            {
                opt_login_wabiz,
                opt_acesso_wabiz,
            }
        );
        return {
            message: "Dados Atualizados",
        };
    }
}

export { ServiceCredenciaisWabiz };
