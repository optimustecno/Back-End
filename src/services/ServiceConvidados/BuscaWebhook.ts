import { getCustomRepository } from "typeorm";
import { CadWebhookRep } from "../../repositories/CadWebhookRep";

interface iConv {
    opt_seq_convidado: any;
}

class ServiceConsWebhooks {
    async execute({ opt_seq_convidado }: iConv) {
        const webhookRep = getCustomRepository(CadWebhookRep);

        const webhooks = await webhookRep.find({
            opt_seq_convidado,
        });

        return webhooks;
    }
}

export { ServiceConsWebhooks };
