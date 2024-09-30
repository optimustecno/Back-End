import { Request, Response } from "express";
import { ServiceDeleteLogs } from "../../services/ServiceLogger";

class ControleDeleteLog {
    async handle(request: Request, response: Response) {
        const { data } = request.params;

        const deleteLog = new ServiceDeleteLogs();

        const LogDelete = await deleteLog.execute({
            data,
        });

        return response.json(LogDelete);
    }
}

export { ControleDeleteLog };