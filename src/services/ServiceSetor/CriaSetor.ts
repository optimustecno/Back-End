import { getCustomRepository } from "typeorm";
import { SetorRep } from "../../repositories/SetoresRep";

interface iSetor {
    seq?: string;
    setor?: string;
}

class ServiceCriaSetor {
    async execute({ setor }: iSetor) {
        const setorRep = getCustomRepository(SetorRep);

        if (!setor) {
            throw new Error("Não Foi Informado o Nome do Setor!");
        }

        const TestaCad = await setorRep.findOne({
            setor,
        });

        if (TestaCad) {
            throw new Error("Setor Existente!");
        }

        const _setor = await setorRep.create({
            setor,
        });

        await setorRep.save(_setor);

        const SuporteCad = await setorRep.findOne({
            setor,
        });

        return SuporteCad;
    }
}

export { ServiceCriaSetor };
