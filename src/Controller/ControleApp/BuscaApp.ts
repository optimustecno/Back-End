import { Request, Response } from "express";
import { ServiceConsApp } from "../../services/ServiceApp";

class ControleBuscaApp {
    async handle(request: Request, response: Response) {
        const { seq } = request.params;
        const ConsApp = new ServiceConsApp();

        const App = await ConsApp.execute({
            seq
        });

        return response.json(App);
    }
}

export { ControleBuscaApp };
