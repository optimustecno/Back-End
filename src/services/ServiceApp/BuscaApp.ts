import { getCustomRepository } from "typeorm";
import { CadAppRep } from "../../repositories/CadAppRep";

interface iApp {
    seq: any;
}

class ServiceConsApp {
    async execute({ seq }: iApp) {
        const appRep = getCustomRepository(CadAppRep);

        const Apps = await appRep.findOne({
            seq,
        });

        if (!Apps) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        return Apps;
    }
}

export { ServiceConsApp };
