import { getCustomRepository } from "typeorm";
import { CadAppRep } from "../../repositories/CadAppRep";

interface iApp {
    opt_cod_cliente: any;
}

class ServiceConsAppsCliente {
    async execute({ opt_cod_cliente }: iApp) {
        const appRep = getCustomRepository(CadAppRep);

        const Apps = await appRep.find({
            opt_cod_cliente,
        });

        if (!Apps) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        return Apps;
    }
}

export { ServiceConsAppsCliente };
