import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../../repositories/ClientesRep";

interface iFiltro {
    opt_bloqueado?: any;
    opt_nome_sistema?: any;
}

class ServiceListaClientes {
    async execute({ opt_bloqueado, opt_nome_sistema }: iFiltro) {
        var ClientesCad;

        const clientesRep = getCustomRepository(ClientesRep);

        if (opt_bloqueado && opt_nome_sistema) {
            ClientesCad = await clientesRep.find({
                where: {
                    opt_bloqueado,
                    opt_nome_sistema,
                },
                order: {
                    opt_nome_cliente: "ASC",
                },
            });
        } else if (!opt_bloqueado && !opt_nome_sistema) {
            ClientesCad = await clientesRep.find({
                order: {
                    opt_nome_cliente: "ASC",
                },
            });
        } else if (!opt_bloqueado) {
            ClientesCad = await clientesRep.find({
                where: {
                    opt_nome_sistema,
                },
                order: {
                    opt_nome_cliente: "ASC",
                },
            });
        } else if (!opt_nome_sistema) {
            ClientesCad = await clientesRep.find({
                where: { opt_bloqueado },
                order: {
                    opt_nome_cliente: "ASC",
                },
            });
        } else {
            ClientesCad = await clientesRep.find({
                order: {
                    opt_nome_cliente: "ASC",
                },
            });
        }

        if (!ClientesCad) {
            throw new Error("Nenhum registro para ser exibido!");
        }
        //
        return ClientesCad;
    }
}

export { ServiceListaClientes };
