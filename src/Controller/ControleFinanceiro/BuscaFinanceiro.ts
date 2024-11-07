import { Request, Response } from "express";
import { ServiceConsultaFinanceiro } from "../../services/ServiceFinanceiro"; 

class ControleBuscaFinanceiroContrato {
    async handle(request: Request, response: Response) {
        const opt_seq_contrato = request.params.codigo;

        const consultaLink = new ServiceConsultaFinanceiro();

        const financeiro = await consultaLink.execute({ opt_seq_contrato });

        return response.json(financeiro);
    }
}

export { ControleBuscaFinanceiroContrato };
