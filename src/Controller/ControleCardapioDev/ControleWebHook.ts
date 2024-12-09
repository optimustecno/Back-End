import { Request, Response } from "express";
import {
    AtivaWebhook,
    ServiceProdutosWebhook,
    UpdateWebhook,
    ServiceAddWebhook
} from "../../services/ServiceCardapioDev";

class ControleAtivaWebhook {
    async handle(request: Request, response: Response) {
        const { id_cliente, Tipo, opt_cod_cliente } = request.body;
        const disparoWebhook = new AtivaWebhook();
        var webhook;
        var itensGravados;
        var listaItens;
        try {
            if (Tipo === "P") {
                listaItens = new ServiceProdutosWebhook();
                itensGravados = await listaItens.execute({ id_cliente });
                // console.log(itensGravados);
                webhook = await disparoWebhook.execute({
                    opt_cod_cliente,
                    opt_finalidade: "2",
                    Data: JSON.parse(JSON.stringify(itensGravados)),
                });
                const updateWebhook = new UpdateWebhook();
                const atRegs = await updateWebhook.execute({ Tipo: "P", opt_cod_cliente });
            } else if (Tipo === "A") {
                listaItens = new ServiceAddWebhook();
                itensGravados = await listaItens.execute({ id_cliente });
                webhook = await disparoWebhook.execute({
                    opt_cod_cliente,
                    opt_finalidade: "4",
                    Data: JSON.parse(JSON.stringify(itensGravados)),
                });
                const updateWebhook = new UpdateWebhook();
                const atRegs = await updateWebhook.execute({ Tipo: "A", opt_cod_cliente });

            }
            return response.json(webhook);
        } catch (error) {
            console.log(error);
            throw new Error("Falha no Controle! Webhook Falhou!");
        }
    }
}

export { ControleAtivaWebhook };
