import { Request, Response } from "express";
import { ServiceDeleteApp } from "../../services/ServiceApp";

class ControleDeleteApp {
    async handle(request: Request, response: Response) {
        const seq = request.params.seq;

        const deleteApp = new ServiceDeleteApp();

        const AppDelete = await deleteApp.execute({
            seq,
        });

        return response.json(AppDelete);
    }
}

export { ControleDeleteApp };
