import { getCustomRepository, Like } from "typeorm";
import { AppRep } from "../../repositories/AppRep";

interface iFiltro {
    opt_nome_cliente?: any;
    app?: any;
    offset?: any;
    take?: any;
}

class ServiceListaApps {
    async execute({ opt_nome_cliente, app, offset, take }: iFiltro) {
        const appRep = getCustomRepository(AppRep);
        var Apps;

        if (!opt_nome_cliente) {
            opt_nome_cliente = "";
        }
        if (!app) {
            app = "";
        }

        Apps = await appRep.find({
            where: {
                opt_nome_cliente: Like(`%${opt_nome_cliente}%`),
                app: Like(`%${app}%`),
            },
            order: { opt_nome_cliente: "ASC", app: "ASC", opt_versao: "ASC" },
            skip: offset,
            take: take,
        });

        if (!Apps) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return Apps;
    }
}

export { ServiceListaApps };
