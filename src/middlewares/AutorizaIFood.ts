import { getCustomRepository } from "typeorm";
import { AppRep } from "../repositories/AppRep";
import { NextFunction, Request, Response } from "express";
import { VerificaAssinaturaHMAC } from "../utils/functions";
import { ServiceGravaLog } from "../services/ServiceLogger";

export async function AutIFood(request: Request, response: Response, next: NextFunction) {
    const chaveIFood = request.headers["x-ifood-signature"];
    let ChaveValida;
    if (chaveIFood) {
        ChaveValida = "" + chaveIFood;
    }
    let testeIFood = await VerificaAssinaturaHMAC(
        JSON.stringify(request.body),
        ChaveValida,
        process.env.SECRET_IFOOD
    );

    var payload = JSON.stringify(request.body);
    const CriaLog = new ServiceGravaLog();
    //
    var iLen = 0;
    var Data = new Date();
    var dia = String(Data.getDate()).padStart(2, "0");
    var mes = String(Data.getMonth() + 1).padStart(2, "0");
    var ano = Data.getFullYear();
    const MomentoD = `${ano}-${mes}-${dia}`;
    var horas = "00" + Data.getHours();
    iLen = String(horas).length;
    horas = horas.substring(iLen, iLen - 2);
    var minutos = "00" + Data.getMinutes();
    iLen = String(minutos).length;
    minutos = minutos.substring(iLen, iLen - 2);
    var segundos = "00" + Data.getSeconds();
    iLen = String(segundos).length;
    segundos = segundos.substring(iLen, iLen - 2);
    const MomentoH = `${horas}:${minutos}:${segundos}`;
    //
    var responseJson = await JSON.parse(payload);
    if (responseJson.fullCode != "KEEPALIVE") {
        console.log(responseJson.merchantId);
        const _log = await CriaLog.execute({
            opt_payload: payload,
            opt_data: MomentoD,
            opt_hora: MomentoH,
            opt_origem: `IFood-${testeIFood}`,
        });
    } else {
        return response
            .status(202)
            .json({ error: "Pedido Não Pertence a Nenhum Cliente Vinculado" });
    }

    if (testeIFood) {
        const appRep = getCustomRepository(AppRep);
        console.log(`Teste de ID ${responseJson.merchantId}`);
        const app = await appRep.findOne({
            where: {
                login: responseJson.merchantId,
            },
        });
        console.log(app);
        if (!app) {
            console.log("Não Encontro Estabelecimento!");
            return response
                .status(202)
                .json({ error: "Pedido Não Pertence a Nenhum Cliente Vinculado" });
        }
        console.log(app.opt_cod_cliente);
        request.opt_cod_cliente = app.opt_cod_cliente;
        request.opt_cod_app = app.seq;
        return next();
    } else {
        throw new Error("Não Autorizado Falha na Assinatura");
    }
}
