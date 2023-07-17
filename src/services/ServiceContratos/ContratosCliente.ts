import { getCustomRepository } from "typeorm";
import { ContratoRep } from "../../repositories/ContratoRep";

//NEGAR ACESSO 403
interface iContrato {
    opt_cod_cliente: string;
}

class ServiceContratosCliente {
    async execute({ opt_cod_cliente }: iContrato) {
        const contratoRep = getCustomRepository(ContratoRep);
        const ContratoCad = await contratoRep.find({
            opt_cod_cliente,
        });

        if (!ContratoCad) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        return ContratoCad;
    }
}

export { ServiceContratosCliente };
