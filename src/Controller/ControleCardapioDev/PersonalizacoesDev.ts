import { Request, Response } from "express";
import { ConsultaPersonalizacoesDev } from "../../services/ServiceCardapioDev"; 

class ControleBuscaPersonalizacoesDev {
    async handle(request: Request, response: Response) {
        const { cod_grupo } = request.params;
        const codigo_Cli = request.opt_cod_cliente;
        const ConsPersonalizacoes = new ConsultaPersonalizacoesDev();

        const personalizacoes = await ConsPersonalizacoes.execute({opt_cod_cliente: codigo_Cli, cod_grupo});

        return response.json(personalizacoes);
    }
}

export { ControleBuscaPersonalizacoesDev };
