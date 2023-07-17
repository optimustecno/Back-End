import { getCustomRepository } from "typeorm";
import { ContratoRep } from "../../repositories/ContratoRep";

//NEGAR ACESSO 403
interface iContrato {
    seq: string;
}

class ServiceConsultaContrato {
    async execute({ seq }: iContrato) {
        const contratoRep = getCustomRepository(ContratoRep);
        const ContratoCad = await contratoRep.findOne({
            seq,
        });

        if (!ContratoCad) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        return ContratoCad;
    }
}

export { ServiceConsultaContrato };
