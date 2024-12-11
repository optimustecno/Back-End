import { createHmac } from "crypto";
import { NextFunction, Request, Response } from "express";
import { ServiceGravaLog } from "../services/ServiceLogger";

export async function AutIFood(request: Request, response: Response, next: NextFunction) {
    //var { cod_pedido } = request.body;
    // console.log(request)
    // console.log(request.headers)
    const chaveIFood = request.headers["x-ifood-signature"];
    console.log(`Headder: ${chaveIFood}`)
    let ChaveValida;
    if (chaveIFood){
        ChaveValida = "" + chaveIFood
    }

    console.log(`Resposta comparação ${verifyHmacSHA256(request.body,ChaveValida)}`)
    
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
    const _log = await CriaLog.execute({
        opt_payload: payload,
        opt_data: MomentoD,
        opt_hora: MomentoH,
        opt_origem: "IFood",
    });

    //if (chaveUai === process.env.CHAVE_UAI_RANGO) {
    return next();
    //}
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
        try {

            const encoder = new TextEncoder();
            const key = await crypto.subtle.importKey(
                "raw",
                encoder.encode(process.env.SECRET_IFOOD),
                { name: "HMAC", hash: { name: "SHA-256" } },
                false,
                ["sign", "verify"]
            );
    
            const signature = await crypto.subtle.sign(
                "HMAC",
                key,
                encoder.encode(data)
            );
    
            const hexSignature = bytesToHexString(new Uint8Array(signature));
            return hexSignature === expectedSignature;


            // const hmac = createHmac('sha256', process.env.SECRET_IFOOD);
            // hmac.update(data, 'utf8');
            // const hmacBytes = hmac.digest();
            // let conv = bytesToHexString(hmacBytes)
            // console.log(`HMAC: ${conv})}`)
            // return conv === expectedSignature;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}
