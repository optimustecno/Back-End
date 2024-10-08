import { Request, Response } from "express";
import { ServiceCriaAlteraWebhook } from "../../services/ServiceConvidados"; 

class ControleCriaAlteraWebHook {
    async handle(request: Request, response: Response) {
        try {
            const {opt_seq_convidado} = request;
            const itens = request.body.map((item) => [
                item.opt_tipo,
                item.opt_url,
                item.opt_finalidade,
            ]);

            const criaWebhook = new ServiceCriaAlteraWebhook();

            itens.forEach(async (_item) => {
                var itemGrava = await criaWebhook.execute({
                    opt_seq_convidado,
                    opt_tipo: _item[0],
                    opt_url: _item[1],
                    opt_finalidade: _item[2],
                });
            });

            return response.json(itens);
        } catch (error) {
            console.log(error);
            throw new Error("Falha no Controle! Tempo Excedido!");
        }
    }
}
export { ControleCriaAlteraWebHook };
