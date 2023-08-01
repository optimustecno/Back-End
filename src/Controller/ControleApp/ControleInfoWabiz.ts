import { Request, Response } from "express";
import { ServiceCredenciaisWabiz } from "../../services/ServiceCliente";

class ControleInformaWabiz {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente, opt_login_wabiz, opt_acesso_wabiz } =
            request.body;

        const updateCli = new ServiceCredenciaisWabiz();

        const clienteGrava = await updateCli.execute({
            opt_cod_cliente,
            opt_login_wabiz,
            opt_acesso_wabiz,
        });

        return response.json(clienteGrava);
    }
}

export { ControleInformaWabiz };
