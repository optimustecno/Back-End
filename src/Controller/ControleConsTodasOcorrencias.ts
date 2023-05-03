import { Request, Response } from "express";
import {
    ServiceConsOcorrencias,
    countOcorrencias,
} from "../services/ServiceConsOcorrencias";

class ControleTodasConsOcorrencias {
    async handle(request: Request, response: Response) {
        var { offset, dataInicial, dataFinal } = request.query;
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
        //
        var Skip = Number(offset);
        const limit = 10;
        const Conta = new countOcorrencias();
        const total = await Conta.execute({ dataIni, dataFim });
        //const currentURL = request.baseUrl;
        const currentURL = "/Ocorrencias";
        //
        const next = Skip + limit;
        var nextUrl;
        if (!dataInicial) {
            nextUrl = next < total ? `${currentURL}?offset=${next}` : null;
        } else {
            nextUrl =
                next < total
                    ? `${currentURL}?offset=${next}&dataInicial=${dataIni}&dataFinal=${dataFim}`
                    : null;
        }
        //
        const previous = Skip - limit < 0 ? null : Skip - limit;
        var previousURL;
        if (!dataInicial) {
            previousURL =
                previous != null ? `${currentURL}?offset=${previous}` : null;
        } else {
            previousURL =
                previous != null
                    ? `${currentURL}?offset=${previous}&dataInicial=${dataIni}&dataFinal=${dataFim}`
                    : null;
        }
        //

        const consultaOcorrencia = new ServiceConsOcorrencias();

        const ocorrencias = await consultaOcorrencia.execute({
            Skip,
            dataIni,
            dataFim,
        });

        return response.json({
            nextUrl,
            previousURL,
            offset,
            total,
            ocorrencias,
        });
    }
}

export { ControleTodasConsOcorrencias };
