import { Request, Response } from "express";
import { ServiceListaNotas, countNotas } from "../../services/ServiceNotasVersao";

class ControleListaNotas {
    async handle(request: Request, response: Response) {
        var { status, sistema, versao, descricao, offset, take } = request.query;
        //
        if (!offset) {
            offset = "0";
        }
        if (!take) {
            take = "10";
        }

        var segueURL = "";

        if (status) {
            segueURL = `&status=${status}`;
        }
        if (sistema) {
            segueURL = segueURL + `&sistema=${sistema}`;
        }
        if (versao) {
            segueURL = segueURL + `&versao=${versao}`;
        }
        if (descricao) {
            segueURL = segueURL + `&descricao=${descricao}`;
        }
        if (take) {
            segueURL = segueURL + `&take=${take}`;
        }

        var Skip = Number(offset);
        const limit = Number(take);
        const Conta = new countNotas();
        const total = await Conta.execute({
            status,
            sistema,
            versao,
            descricao,
        });
        //const currentURL = request.baseUrl;
        const currentURL = "/Suportes";
        //
        const next = Skip + limit;
        var nextUrl;
        nextUrl = next < total ? `${currentURL}?offset=${next}${segueURL}` : null;
        //
        const previous = Skip - limit < 0 ? null : Skip - limit;
        var previousURL;
        previousURL = previous != null ? `${currentURL}?offset=${previous}${segueURL}` : null;
        //
        const consultaNotas = new ServiceListaNotas();
        const notas = await consultaNotas.execute({
            status,
            sistema,
            versao,
            descricao,
            offset,
            take,
        });

        return response.json({
            nextUrl,
            previousURL,
            offset,
            take,
            total,
            notas,
        });
    }
}

export { ControleListaNotas };
