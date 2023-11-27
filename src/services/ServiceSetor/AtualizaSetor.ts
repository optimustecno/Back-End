import { getCustomRepository } from "typeorm";
import { SetorRep } from "../../repositories/SetoresRep";

interface iSetor {
    seq?: string;
    setor?: string;
}

class ServiceAtualizaSetor {
    async execute({ seq, setor }: iSetor) {
        const setorRep = getCustomRepository(SetorRep);

        if (!seq) {
            throw new Error("Código do Setor Não Informado");
        }

        const _setor = await setorRep.update(
            { seq },
            {
                setor,
            }
        );

        return {
            seq,
            setor,
        };
    }
}

export { ServiceAtualizaSetor };
