import { Request, Response } from "express";
import { ServiceConsAppsCliente } from "../../services/ServiceApp";

class ControleBuscaAppsCliente {
    async handle(request: Request, response: Response) {
        const opt_cod_cliente = request.params.codigo;
        const ConsApp = new ServiceConsAppsCliente();

        const App = await ConsApp.execute({
            opt_cod_cliente
        });

        return response.json(App);
    }
}

export { ControleBuscaAppsCliente };
