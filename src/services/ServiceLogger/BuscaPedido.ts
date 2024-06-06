import { getCustomRepository, Like, Between, Not } from "typeorm";
import { LoggerwebhookRep } from "../../repositories/LoggerWebHookRep";

interface iFiltro {
    opt_payload?: any;
}

class ServiceBuscaJson {
    async execute({ opt_payload }: iFiltro) {
        const LoggerRep = getCustomRepository(LoggerwebhookRep);

        const pedido = await LoggerRep.find({
            where: {
                opt_payload: Like(`%${opt_payload}%`),
            },
        });

        if (!pedido) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return pedido;
    }
}

export { ServiceBuscaJson };
