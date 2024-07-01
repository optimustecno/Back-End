import { Request, Response } from "express";
import { ServiceCriaApp } from "../../services/ServiceApp";

class ControleCriaApp {
    async handle(request: Request, response: Response) {
        const {
            opt_cod_cliente,
            app,
            login,
            senha,
            token,
            rede,
            hora_inicio,
            hora_fim,
            tempo_retirada,
            tempo_entrega,
            tempo_automatico,
            permite_alterar_tempo,
            informa_saida_entrega,
            validade_token,
            aceita_valor_maior,
            importa_optimus,
            refresh_token,
            tempo_request,
            status_api,
            mensagem_status,
            importa_cod_ext,
            url,
            tipo_comanda,
        } = request.body;

        const criaApp = new ServiceCriaApp();

        const AppGrava = await criaApp.execute({
            opt_cod_cliente,
            app,
            login,
            senha,
            token,
            rede,
            hora_inicio,
            hora_fim,
            tempo_retirada,
            tempo_entrega,
            tempo_automatico,
            permite_alterar_tempo,
            informa_saida_entrega,
            validade_token,
            aceita_valor_maior,
            importa_optimus,
            refresh_token,
            tempo_request,
            status_api,
            mensagem_status,
            importa_cod_ext,
            url,
            tipo_comanda,
        });

        return response.json(AppGrava);
    }
}

export { ControleCriaApp };
