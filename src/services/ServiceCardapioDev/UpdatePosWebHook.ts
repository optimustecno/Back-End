import { getCustomRepository } from "typeorm";
import { ProdCardapioRep } from "../../repositories/ProdutosCardapioRep";
import { AdicionaisRep } from "../../repositories/AdicionaisRep";

interface iAtWebhook{
    opt_cod_cliente: string;
    Tipo: string;
}

class UpdateWebhook {
    async execute({
        Tipo, opt_cod_cliente
    }: iAtWebhook) {
        const prodRep = getCustomRepository(ProdCardapioRep);
        const addRep = getCustomRepository(AdicionaisRep); 
        var At;
        try{
            if (Tipo === "A"){
                At = await addRep.update(
                    { opt_cod_cliente },
                    {
                        webhook: "1",
                    }
                );
            }
            else {
                At = await prodRep.update(
                    { opt_cod_cliente },
                    {
                        webhook: "1",
                    }
                );
            }
            
            return At;
        }
        catch{
            throw new Error("Falha na Atualizazção do Campo Webhook");
        }
    }
}

export { UpdateWebhook };
