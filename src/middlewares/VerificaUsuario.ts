import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface IUsuarioAutorizado {
    sub: string
}

export function VerificaUsuario(request: Request, response: Response, next: NextFunction) {
    // var tempo = new Date()
    // console.log(`Verifica Usuario ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
    //console.log(`Verifica USU: ${request.params.codigo}`)
    //console.log(request.headers.authorization)
    //console.log(request.headers.authorization.split(" ")[1])
    const token = request.headers.authorization.split(" ")[1]
    if (!token) {
        // var tempo = new Date()
        // console.log(`FIM Verifica Usuario naut ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
        return response.status(401).json({
            error: "Não Autorizado"
        });
    }
    try {
        const { sub } = verify(token, process.env.SECRET) as IUsuarioAutorizado;
        request.opt_codigo_usu = sub
        // var tempo = new Date()
        // console.log(`FIM Verifica Usuario ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
        //console.log("Passou Verifica")
        return next();
    } catch (error) {
        // var tempo = new Date()
        // console.log(`FIM Verifica Usuario ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
        return response.status(401).json({
            error: "Não Autorizado"
        });
    }

}