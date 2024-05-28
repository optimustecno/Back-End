import { Request, Response } from "express";
import { ServiceListaSuportes, countSuportes } from "../../services/ServiceSuporte";

class ControleListaSuporte {
    async handle(request: Request, response: Response) {
        var { status, cliente, offset, dataInicial, dataFinal, titulo, prioridade, setor } = request.query;
        var dataIni;
        var dataFim;
        //
        if (!offset) {
            offset = "0";
        }
        if (!dataInicial) {
            dataIni = null;
        } else {
            dataIni = dataInicial;
        }
        if (!dataFinal) {
            dataFim = null;
        } else {
            dataFim = dataFinal;
        }

        var segueURL = "";

        if (status) {
            segueURL = `&status=${status}`;
        }
        if (cliente) {
            segueURL = segueURL + `&cliente=${cliente}`;
        }
        if (titulo) {
            segueURL = segueURL + `&titulo=${titulo}`;
        }
        if (prioridade) {
            segueURL = segueURL + `&prioridade=${prioridade}`;
        }
        if (setor) {
            segueURL = segueURL + `&setor=${setor}`;
        }

        var Skip = Number(offset);
        const limit = 10;
        const Conta = new countSuportes();
        const total = await Conta.execute({
            dataInicial: dataIni,
            dataFinal: dataFim,
            status,
            cliente,
            titulo,
            prioridade,
            setor
        });
        //const currentURL = request.baseUrl;
        const currentURL = "/Suportes";
        //
        const next = Skip + limit;
        var nextUrl;
        if (!dataInicial) {
            nextUrl = next < total ? `${currentURL}?offset=${next}${segueURL}` : null;
        } else {
            nextUrl =
                next < total
                    ? `${currentURL}?offset=${next}&dataInicial=${dataIni}&dataFinal=${dataFim}${segueURL}`
                    : null;
        }
        //
        const previous = Skip - limit < 0 ? null : Skip - limit;
        var previousURL;
        if (!dataInicial) {
            previousURL = previous != null ? `${currentURL}?offset=${previous}${segueURL}` : null;
        } else {
            previousURL =
                previous != null
                    ? `${currentURL}?offset=${previous}&dataInicial=${dataIni}&dataFinal=${dataFim}${segueURL}`
                    : null;
        }
        //

        const consultaSuportes = new ServiceListaSuportes();
        var cCliente;
        if (!cliente) {
            cCliente = "";
        } else {
            cCliente = cliente.toString();
        }

        const suportes = await consultaSuportes.execute({
            status,
            cliente: cCliente.trim(),
            offset,
            dataInicial,
            dataFinal,
            titulo,
            prioridade,
            setor
        });

        return response.json({
            nextUrl,
            previousURL,
            offset,
            total,
            suportes,
        });
    }
}

export { ControleListaSuporte };
