import { getCustomRepository } from "typeorm";
import { LoggerwebhookRep } from "../../repositories/LoggerWebHookRep";

interface iLog {
    opt_payload: string;
    opt_data: string;
    opt_hora: string;
    opt_origem: string;
}

class ServiceGravaLog {
    async execute({
        opt_payload,
        opt_data,
        opt_hora,
        opt_origem,
    }: iLog) {
        
        const LoggerRep = getCustomRepository(LoggerwebhookRep);

        console.log("chegou aqui" + opt_payload.toString() + "PAYLOAD")

        const _logger = await LoggerRep.create({
            opt_payload,
            opt_data,
            opt_hora,
            opt_origem
        });

        await LoggerRep.save(_logger);

        return _logger;
    }
}
export { ServiceGravaLog };
