import { Request, Response } from "express";
import { ServiceCriaPerfilCardapio } from "../../services/ServiceCardapio";

class ControleCriaPerfilCardapio {
    async handle(request: Request, response: Response) {
        const { opt_cod_cliente,
            cor_primaria,
            cor_secundaria,
            cor_destaque_prod,
            cor_fonte,
            logo_svg, } = request.body;

        const criaPerfil = new ServiceCriaPerfilCardapio();

        const PerfilGrava = await criaPerfil.execute({
            opt_cod_cliente,
            cor_primaria,
            cor_secundaria,
            cor_destaque_prod,
            cor_fonte,
            logo_svg,
        });

        return response.json(PerfilGrava);
    }
}

export { ControleCriaPerfilCardapio };
