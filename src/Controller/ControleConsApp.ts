import { Request, Response } from "express"
import { ServiceConsultaApp } from "../services/ServiceConsApp";

class ControleConsApp {
    async handle(request: Request, response: Response) {
        const codigo_Cli = request.params.codigo;

        const consultaApp = new ServiceConsultaApp();

        const apps = await consultaApp.execute({
            codigo_Cli
        })

        return response.json(apps)
    }
}

export { ControleConsApp }