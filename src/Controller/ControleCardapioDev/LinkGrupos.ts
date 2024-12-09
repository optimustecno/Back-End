import { Request, Response } from "express";
import { ConsultaLinkGruposDev } from "../../services/ServiceCardapioDev";

class ControleBuscaLinkGrupos {
    async handle(request: Request, response: Response) {
        const { id_cliente } = request;
        const ConsGrupos = new ConsultaLinkGruposDev();

        const Grupos = await ConsGrupos.execute({
            id_cliente
        });

        return response.json(Grupos);
    }
}

export { ControleBuscaLinkGrupos };
