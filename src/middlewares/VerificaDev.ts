import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { ConvidadosRep } from "../repositories/ConvidadosRep";

interface IUsuarioAutorizado {
    sub: string
}

export async function VerificaDev(request: Request, response: Response, next: NextFunction) {
    // var tempo = new Date()
    // console.log(`Verifica Usuario ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
    //console.log(`Verifica USU: ${request.params.codigo}`)
    //console.log(request.headers.authorization)
    //console.log(request.headers.authorization.split(" ")[1])
    const token = request.headers.authorization.split(" ")[1]
    if (!token) {
        // var tempo = new Date()
        // console.log(`FIM Verifica Usuario naut ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
        console.log(`Token Não Informado`)
        return response.status(401).json({
            error: "Não Autorizado"
        });
    }
    try {
        const { sub } = verify(token, process.env.SECRETGUEST) as IUsuarioAutorizado;
        request.opt_seq_convidado = sub

        const guest = getCustomRepository(ConvidadosRep);

        const _guest = await guest.findOne({
            opt_seq_convidado: sub,
            opt_token: token,
        })

        if (!_guest){
            console.log(`Token Ivalido para o Usuario`)
            return response.status(401).json({
                error: "Não Autorizado token inválido"
            });
        }
        
        // var tempo = new Date()
        // console.log(`FIM Verifica Usuario ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
        //console.log("Passou Verifica")
        return next();
    } catch (error) {
        // var tempo = new Date()
        // console.log(`FIM Verifica Usuario ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
        console.log(`erro inesperado ${error}`)
        return response.status(401).json({
            error: "Não Autorizado"
        });
    }

}