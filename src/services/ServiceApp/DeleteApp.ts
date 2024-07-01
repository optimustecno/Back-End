import { getCustomRepository } from "typeorm";
import { CadAppRep } from "../../repositories/CadAppRep";

interface iApp {
    seq: string;
}

class ServiceDeleteApp {
    async execute({ seq }: iApp) {
        const appRep = getCustomRepository(CadAppRep);

        const App = await appRep.delete({ seq });

        return {
            message: "Aplicativo Removido",
        };
    }
}

export { ServiceDeleteApp };
