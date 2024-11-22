import { getCustomRepository, Like } from "typeorm";
import { NotasVersaoRep } from "../../repositories/NotasVersaoRep";

interface iFiltro {
    seq: string;
}

class ServiceBuscaNota {
    async execute({ seq }: iFiltro) {
        const notasRep = getCustomRepository(NotasVersaoRep);

        if (!seq) {
            throw new Error("Seq do Registro não informado!");
        }

        const NotasVersao = await notasRep.findOne({
            seq,
        });

        if (!NotasVersao) {
            throw new Error("Registro Não Encontrado!");
        }

        return NotasVersao;
    }
}

export { ServiceBuscaNota };
