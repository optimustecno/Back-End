import { Request, Response } from "express";
import { ServiceAdmListaVinculos, ServiceContaVinculos } from "../../services/ServiceConvidados";

class ControleAdmListaVinculos {
    async handle(request: Request, response: Response) {
        var { opt_aprovado, opt_nome_convidado, offset, take } = request.query;
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
        if (opt_nome_convidado){
            segueURL = segueURL + `&opt_nome_convidado=${opt_nome_convidado}`;
        }
        if (take){
            segueURL = segueURL + `&take=${take}`;
        }

        var Skip = Number(offset);
        const limit = Number(take);
        const Conta = new ServiceContaVinculos();
        const total = await Conta.execute({
            opt_aprovado,
            opt_nome_convidado
        });
        //const currentURL = request.baseUrl;
        const currentURL = "/AdmVinculos";
        //
        const next = Skip + limit;
        var nextUrl = next < total ? `${currentURL}?offset=${next}${segueURL}` : null;
        //
        const previous = Skip - limit < 0 ? null : Skip - limit;
        var previousURL = previous != null ? `${currentURL}?offset=${previous}${segueURL}` : null;
        //
        const consultaConvidados = new ServiceAdmListaVinculos();
        const vinculos = await consultaConvidados.execute({
            opt_aprovado,
            opt_nome_convidado,
            offset,
            take
        });

        return response.json({
            nextUrl,
            previousURL,
            offset,
            take,
            total,
            vinculos,
        });
    }
}

export { ControleAdmListaVinculos };
