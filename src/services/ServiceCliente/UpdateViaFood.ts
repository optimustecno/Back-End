import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../../repositories/ClienteRep";

interface iUpdateViaFood {
    opt_cod_cliente: string;
    sistema: string;
    opt_versao: string;
    opt_versao_adm: string;
    opt_ultimo_acesso: string;
}

class ServiceUpdateViaFood {
    async execute({
        opt_cod_cliente,
        sistema,
        opt_ultimo_acesso,
        opt_versao,
        opt_versao_adm,
    }: iUpdateViaFood) {
        const clientesRep = getCustomRepository(ClientesRep);
        var _cliente;
        if (!opt_cod_cliente) {
            throw Error("Código do Cliente Não Informado");
        }

        if (sistema === "FOOD") {
            _cliente = await clientesRep.update(
                { opt_cod_cliente: opt_cod_cliente },
                {
                    opt_ultimo_acesso,
                    opt_versao,
                    opt_nome_sistema: sistema
                }
            );
        } else {
            _cliente = await clientesRep.update(
                { opt_cod_cliente: opt_cod_cliente },
                {
                    opt_ultimo_acesso,
                    opt_versao_adm,
                    opt_nome_sistema: sistema
                }
            );
        }

        return {
            message: "Dados Atualizados",
        };
    }
}

export { ServiceUpdateViaFood };
