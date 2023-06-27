import { getCustomRepository } from "typeorm";
import { SetorRep } from "../repositories/SetoresRep";

interface iSetor {
    seq?: string;
    setor?: string;
}

class consultaSetor {
    async execute() {
        const setorRep = getCustomRepository(SetorRep);

        const Setor = await setorRep.find();

        return Setor;
    }
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

class ServiceAtualizaSetor {
    async execute({ seq, setor }: iSetor) {
        const setorRep = getCustomRepository(SetorRep);

        if (!seq) {
            throw new console.error("Código do Setor Não Informado");
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

export { ServiceCriaSetor, consultaSetor, ServiceAtualizaSetor };
