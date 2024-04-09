import { Request, Response } from "express"

class ControleLogger {
    async handle(request: Request, response: Response) {
        const corpoReq = request.body;

        console.log(corpoReq);

        return response.json(
            "OK"
        )
    }
}

export { ControleLogger }