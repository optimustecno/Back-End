import { getCustomRepository } from "typeorm";
import { AppRep } from "../repositories/AppRep"

class ServiceConsultaApp {

    async execute() {
        const appRep = getCustomRepository(AppRep);

        const appExistentes = await appRep.find({
            where: {
                app: "ACCON"
            },
        });

        if (!appExistentes) {
            throw new Error("Nenhum APP Para Ser Listado!")
        }

        return appExistentes
    }
}

export { ServiceConsultaApp }