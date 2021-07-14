import { Request, Response } from "express"
import { ServiceConsultaApp } from "../services/ServiceConsApp";

class ControleConsApp {
    async handle(request: Request, response: Response) {

        const consultaApp = new ServiceConsultaApp();

        const apps = await consultaApp.execute()

        return response.json(apps)
    }
}

export { ControleConsApp }