import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../../repositories/ClienteRep";

//NEGAR ACESSO 403
interface iCliente {
    opt_cod_cliente: string;
}

class ServiceConsultaCliente {
    async execute({ opt_cod_cliente }: iCliente) {
        const clientesRep = getCustomRepository(ClientesRep);
        const ClientesCad = await clientesRep.findOne({
            opt_cod_cliente,
        });

        if (!ClientesCad) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        return ClientesCad;
    }
}

export { ServiceConsultaCliente };
