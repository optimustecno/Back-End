import { getCustomRepository, Like, Between, Not } from "typeorm";
import { AppRep } from "../../repositories/AppRep";

interface iFiltro {
    opt_nome_cliente?: any;
    app?: any;
}

class ServiceContaApps {
    async execute({ opt_nome_cliente, app }: iFiltro) {
        const appRep = getCustomRepository(AppRep);
        var Apps;

        if (!opt_nome_cliente) {
            opt_nome_cliente = "";
        }
        if (!app) {
            app = "";
        }

        Apps = await appRep.count({
            where: {
                opt_nome_cliente: Like(`%${opt_nome_cliente}%`),
                app: Like(`%${app}%`),
            },
        });

        if (!Apps) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return Apps;
    }
}

export { ServiceContaApps };
