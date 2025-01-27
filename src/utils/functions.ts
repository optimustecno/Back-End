import { createHmac } from "crypto";
import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../repositories/ClienteRep";

interface iTexto {
    textoRep: string;
}

interface iCardapio {
    opt_cod_cliente: string;
}

class removeEmojis {
    async execute({ textoRep }: iTexto) {
        var regex =
            /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
        return textoRep.replace(regex, "");
    }
}

class ValidaCardapio {
    async execute({ opt_cod_cliente }: iCardapio) {
        const ClienteRep = getCustomRepository(ClientesRep);
        const _Cliente = await ClienteRep.findOne({ opt_cod_cliente });
        if (!_Cliente) {
            return false;
        }
        if (_Cliente.opt_cardapio_digital != "1") {
            return false;
        } else {
            return true;
        }
    }
}

function Espera(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function bytesToHexString(bytes) {
    let hexString = "";
    for (const byte of bytes) {
        const hex = byte.toString(16).padStart(2, "0");
        hexString += hex;
    }
    return hexString;
}

async function VerificaAssinaturaHMAC(data: string, expectedSignature: string, secret: string) {
    let bRet = false;
    try {
        const hmac = createHmac("sha256", secret);
        hmac.update(data, "utf8");
        const hmacBytes = hmac.digest();
        let conv = bytesToHexString(hmacBytes);
        // console.log(`HMAC: ${conv}`)
        if (conv === expectedSignature) {
            bRet = true;
        } else {
            bRet = false;
        }
        return bRet;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export { removeEmojis, ValidaCardapio, Espera, VerificaAssinaturaHMAC };
