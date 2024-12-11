import { createHmac } from "crypto";
import { NextFunction, Request, Response } from "express";
import { ServiceGravaLog } from "../services/ServiceLogger";
import { Espera } from "../utils/functions";

export async function AutIFood(request: Request, response: Response, next: NextFunction) {
    
    const chaveIFood = request.headers["x-ifood-signature"];
    let ChaveValida;
    if (chaveIFood){
        ChaveValida = "" + chaveIFood
    }
    let testeIFood = await verifyHmacSHA256(JSON.stringify(request.body), ChaveValida)
    
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
    //
    var responseJson = await JSON.parse(payload) ;
    if (responseJson.fullCode != "KEEPALIVE"){
        const _log = await CriaLog.execute({
            opt_payload: payload,
            opt_data: MomentoD,
            opt_hora: MomentoH,
            opt_origem: `IFood-${testeIFood}`,
        });
    }

    if (testeIFood) {
        return next();
    }
    else {
        throw new Error("Não Autorizado Falha na Assinatura");
    }
    //senha ok?
    //throw new Error("Não Autorizado");
    function bytesToHexString(bytes) {
        let hexString = '';
        for (const byte of bytes) {
            const hex = byte.toString(16).padStart(2, '0');
            hexString += hex;
        }
        return hexString;
    }
    
    async function verifyHmacSHA256( data: string, expectedSignature: string) {
        let bRet = false;
        try {

            const hmac = createHmac('sha256', process.env.SECRET_IFOOD);
            hmac.update(data, 'utf8');
            const hmacBytes = hmac.digest();
            let conv = bytesToHexString(hmacBytes)
            console.log(`HMAC: ${conv}`)
            if (conv === expectedSignature){
                bRet = true;
            }
            else {
                bRet = false;
            }
            return bRet;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}
