import { getCustomRepository } from "typeorm";
import { CadWebhookRep } from "../../repositories/CadWebhookRep";

interface iCriaWebhook {
    opt_seq_convidado: string;
    opt_tipo: string;
    opt_url: string;
    opt_finalidade: string;
}

class ServiceCriaAlteraWebhook {
    async execute({ opt_seq_convidado, opt_tipo, opt_url, opt_finalidade }: iCriaWebhook) {
        const webhookDev = getCustomRepository(CadWebhookRep);
        var Webhook;
        const vinculoExiste = await webhookDev.findOne({
            opt_seq_convidado,
            opt_finalidade,
        });
        if (vinculoExiste) {
            Webhook = await webhookDev.update(
                { opt_seq_convidado, opt_finalidade },
                { opt_tipo, opt_url }
            );
        } else {
            Webhook = await webhookDev.create({
                opt_seq_convidado,
                opt_tipo,
                opt_url,
                opt_finalidade,
            });

            await webhookDev.save(Webhook);
        }

        return { opt_seq_convidado, opt_tipo, opt_url, opt_finalidade };
    }
}

export { ServiceCriaAlteraWebhook };
