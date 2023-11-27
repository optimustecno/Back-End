import { Like, Between, Not } from "typeorm";
import { ViewSuporteRep as SuporteRep } from "../../repositories/ViewSuporteRep";

interface iFiltro {
	status?: any;
	cliente?: any;
	dataInicial?: any;
	dataFinal?: any;
	hora?: any;
	titulo?: any;
	prioridade?: any;
	offset?: any;
}

class countSuportes {
	async execute({
		status,
		cliente,
		dataInicial,
		dataFinal,
		titulo,
		prioridade,
	}: iFiltro) {
		const ocorrenciaRep = SuporteRep;
		var ContaSuportes;

		if (!cliente) {
			cliente = "";
		}
		if (!titulo) {
			titulo = "";
		}
		if (!prioridade) {
			prioridade = "";
		}
		if (!status) {
			status = "";
		}

		if (!dataInicial && !dataFinal) {
			ContaSuportes = await ocorrenciaRep.count();
		} else if (!dataInicial) {
			throw new Error("Não Foi Informada a Data Inicial!");
		} else if (!dataFinal) {
			throw new Error("Não Foi Informada a Data Final!");
		} else {
			if (!status) {
				ContaSuportes = await ocorrenciaRep.count({
					where: {
						opt_nome_cliente: Like(cliente),
						titulo: Like(`%${titulo}%`),
						prioridade: Like(`%${prioridade}%`),
						status: Not("4"),
						data: Between(dataInicial, dataFinal),
					},
				});
			} else {
				ContaSuportes = await ocorrenciaRep.count({
					where: {
						opt_nome_cliente: Like(cliente),
						titulo: Like(`%${titulo}%`),
						prioridade: Like(`%${prioridade}%`),
						status,
						data: Between(new Date(dataInicial), new Date(dataFinal)),
					},
				});
			}
		}
		return ContaSuportes;
	}
}

export { countSuportes };
