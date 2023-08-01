import { Request, Response } from "express"

class ControleTeste {
    async handle(request: Request, response: Response) {

        return response.json(
            "Acessível"
        )
    }
}

export { ControleTeste }