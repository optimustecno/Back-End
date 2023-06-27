import { Request, Response } from "express";
import {
    ServiceConsultaSuportes,
    countSuportes,
} from "../services/ServiceSuportes";

class ControleConsSuporte {
    async handle(request: Request, response: Response) {
        var {
            status,
            cliente,
            offset,
            dataInicial,
            dataFinal,
            titulo,
            prioridade,
        } = request.query;
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
        });
        //const currentURL = request.baseUrl;
        const currentURL = "/Suportes";
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

        const consultaSuportes = new ServiceConsultaSuportes();

        const suportes = await consultaSuportes.execute({
            status,
            cliente,
            offset,
            dataInicial,
            dataFinal,
            titulo,
            prioridade,
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

export { ControleConsSuporte };
