import { getCustomRepository, LessThan } from "typeorm";
import { LoggerwebhookRep } from "../../repositories/LoggerWebHookRep";

interface iSuporte {
    data: any;
}

class ServiceDeleteLogs {
    async execute({ data }: iSuporte) {
        const loggerRep = getCustomRepository(LoggerwebhookRep);

        const logs = await loggerRep.delete({ opt_data: LessThan (data) });

        return {
            message: "Logs Removidos",
        };
    }
}

export { ServiceDeleteLogs };
