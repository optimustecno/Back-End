
import { AppRep } from "../../repositories/AppRep";

interface iAppsCliente {
    codigo_Cli: string;
}

class ServiceConsultaApp {
    async execute({ codigo_Cli }: iAppsCliente) {
        const appRep = AppRep;
        //Acrescentei parametro para filtrar aplicativos apenas de quem está solicitando pedidos
        const appExistentes = await appRep.find({
            where: {
                opt_cod_cliente: codigo_Cli,
                app: "ACCON",
            },
        });

        if (!appExistentes) {
            throw new Error("Nenhum APP Para Ser Listado!");
        }

        return appExistentes;
    }
}

export { ServiceConsultaApp };
