import { Request, Response } from "express";
import { ServiceContaAcessos, ServiceListaAcessos } from "../../services/ServiceAcessoRemoto";

class ControleListaAcessos {
    async handle(request: Request, response: Response) {
        var { opt_nome_cliente, opt_contato, opt_cargo, opt_fone, offset } = request.query;
        //
        if (!offset) {
            offset = "0";
        }

        var segueURL = "";

        if (opt_nome_cliente) {
            segueURL = `&opt_nome_cliente=${opt_nome_cliente}`;
        }
        if (opt_contato) {
            segueURL = segueURL + `&opt_contato=${opt_contato}`;
        }
        if (opt_cargo) {
            segueURL = segueURL + `&opt_cargo=${opt_cargo}`;
        }
        if (opt_fone) {
            segueURL = segueURL + `&opt_fone=${opt_fone}`;
        }

        var Skip = Number(offset);
        const limit = 10;
        const Conta = new ServiceContaAcessos();
        const total = await Conta.execute({
            opt_nome_cliente,
            opt_contato,
            opt_cargo,
            opt_fone,
        });
        //const currentURL = request.baseUrl;
        const currentURL = "/Suportes";
        //
        const next = Skip + limit;
        var nextUrl = next < total ? `${currentURL}?offset=${next}${segueURL}` : null;
        //
        const previous = Skip - limit < 0 ? null : Skip - limit;
        var previousURL = previous != null ? `${currentURL}?offset=${previous}${segueURL}` : null;
        //
        const consultaSuportes = new ServiceListaAcessos();
        const contatos = await consultaSuportes.execute({
            opt_nome_cliente,
            opt_contato,
            opt_cargo,
            opt_fone,
            offset
        });

        return response.json({
            nextUrl,
            previousURL,
            offset,
            total,
            contatos,
        });
    }
}

export { ControleListaAcessos };
