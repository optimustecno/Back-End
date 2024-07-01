import { Request, Response } from "express";
import { ServiceContaApps, ServiceListaApps } from "../../services/ServiceApp";

class ControleListaApps {
    async handle(request: Request, response: Response) {
        var { opt_nome_cliente, app, offset, take } = request.query;
        //
        if (!offset) {
            offset = "0";
        }
        if(!take){
            take = "10";
        }
        var segueURL = "";

        if (opt_nome_cliente) {
            segueURL = `&opt_nome_cliente=${opt_nome_cliente}`;
        }
        if (app) {
            segueURL = segueURL + `&app=${app}`;
        }
        if (take){
            segueURL = segueURL + `&take=${take}`;
        }

        var Skip = Number(offset);
        const limit = Number(take);
        const Conta = new ServiceContaApps();
        const total = await Conta.execute({
            opt_nome_cliente,
            app,
        });
        //const currentURL = request.baseUrl;
        const currentURL = "/Apps";
        //
        const next = Skip + limit;
        var nextUrl = next < total ? `${currentURL}?offset=${next}${segueURL}` : null;
        //
        const previous = Skip - limit < 0 ? null : Skip - limit;
        var previousURL = previous != null ? `${currentURL}?offset=${previous}${segueURL}` : null;
        //
        const consultaApps = new ServiceListaApps();
        const apps = await consultaApps.execute({
            opt_nome_cliente,
            app,
            offset,
            take
        });

        return response.json({
            nextUrl,
            previousURL,
            offset,
            take,
            total,
            apps,
        });
    }
}

export { ControleListaApps };
