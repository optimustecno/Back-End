import { Request, Response } from "express";
import { ServiceContaContatos, ServiceListaContatos } from "../../services/ServiceContatos";

class ControleListaContatos {
    async handle(request: Request, response: Response) {
        var { opt_nome_cliente, opt_contato, opt_cargo, opt_fone, offset, take } = request.query;
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
        if (opt_contato) {
            segueURL = segueURL + `&opt_contato=${opt_contato}`;
        }
        if (opt_cargo) {
            segueURL = segueURL + `&opt_cargo=${opt_cargo}`;
        }
        if (opt_fone) {
            segueURL = segueURL + `&opt_fone=${opt_fone}`;
        }
        if (take){
            segueURL = segueURL + `&take=${take}`;
        }

        var Skip = Number(offset);
        const limit = Number(take);
        const Conta = new ServiceContaContatos();
        const total = await Conta.execute({
            opt_nome_cliente,
            opt_contato,
            opt_cargo,
            opt_fone,
        });
        //const currentURL = request.baseUrl;
        const currentURL = "/Contatos";
        //
        const next = Skip + limit;
        console.log(Skip)
        console.log(limit)

        var nextUrl = next < total ? `${currentURL}?offset=${next}${segueURL}` : null;
        //
        const previous = Skip - limit < 0 ? null : Skip - limit;
        var previousURL = previous != null ? `${currentURL}?offset=${previous}${segueURL}` : null;
        //
        const consultaSuportes = new ServiceListaContatos();
        const contatos = await consultaSuportes.execute({
            opt_nome_cliente,
            opt_contato,
            opt_cargo,
            opt_fone,
            offset, 
            take
        });

        return response.json({
            nextUrl,
            previousURL,
            offset,
            take,
            total,
            contatos,
        });
    }
}

export { ControleListaContatos };
