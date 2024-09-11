import { Request, Response } from "express";
import { ServiceContaConvidados, ServiceListaConvidados } from "../../services/ServiceConvidados";

class ControleListaConvidados {
    async handle(request: Request, response: Response) {
        var { opt_aprovado, opt_tipo_convidado, offset, take } = request.query;
        //
        if (!offset) {
            offset = "0";
        }
        if(!take){
            take = "10";
        }
        var segueURL = "";

        if (opt_aprovado) {
            segueURL = `&opt_aprovado=${opt_aprovado}`;
        }
        if (opt_tipo_convidado){
            segueURL = segueURL + `&opt_tipo_convidado=${opt_tipo_convidado}`;
        }
        if (take){
            segueURL = segueURL + `&take=${take}`;
        }

        var Skip = Number(offset);
        const limit = Number(take);
        const Conta = new ServiceContaConvidados();
        const total = await Conta.execute({
            opt_aprovado,
        });
        //const currentURL = request.baseUrl;
        const currentURL = "/Convidados";
        //
        const next = Skip + limit;
        var nextUrl = next < total ? `${currentURL}?offset=${next}${segueURL}` : null;
        //
        const previous = Skip - limit < 0 ? null : Skip - limit;
        var previousURL = previous != null ? `${currentURL}?offset=${previous}${segueURL}` : null;
        //
        const consultaConvidados = new ServiceListaConvidados();
        const convidados = await consultaConvidados.execute({
            opt_aprovado,
            offset,
            take
        });

        return response.json({
            nextUrl,
            previousURL,
            offset,
            take,
            total,
            convidados,
        });
    }
}

export { ControleListaConvidados };
