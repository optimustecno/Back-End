import { Request, Response } from "express";
import { ServiceConsultaParcela } from "../../services/ServiceFinanceiro"; 

class ControleBuscaParcela {
    async handle(request: Request, response: Response) {
        const seq = request.params.codigo;

        const consultaLink = new ServiceConsultaParcela();

        const financeiro = await consultaLink.execute({ seq });

        return response.json(financeiro);
    }
}

export { ControleBuscaParcela };
