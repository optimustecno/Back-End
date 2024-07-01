import { getCustomRepository } from "typeorm";
import { CadAppRep } from "../../repositories/CadAppRep";

interface iCriaApp {
    opt_cod_cliente: string;
    app: string;
    login: string;
    senha: string;
    token: string;
    rede?: string;
    hora_inicio: string;
    hora_fim: string;
    tempo_retirada: string;
    tempo_entrega: string;
    tempo_automatico: string;
    permite_alterar_tempo: string;
    informa_saida_entrega: string;
    validade_token: string;
    aceita_valor_maior: string;
    importa_optimus: string;
    refresh_token: string;
    tempo_request: Number;
    status_api: string;
    mensagem_status: string;
    importa_cod_ext: string;
    url: string;
    tipo_comanda: string;
}

class ServiceCriaApp {
    async execute({
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
        tipo_comanda
    }: iCriaApp) {
        const appRep = getCustomRepository(CadAppRep);

        const _app = await appRep.create({
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
            tipo_comanda
        });

        await appRep.save(_app);

        return _app;
    }
}
export { ServiceCriaApp };
