import { ContratoRep } from "../../repositories/ContratoRep";

interface iContrato {
	seq: string;
	opt_cod_cliente: string;
	data: Date;
	vencimento: string;
	tx_instalacao?: number;
	venc_instalacao?: Date;
	inicio_mens: Date;
	valor_mens: number;
	percentual: number;
	base_calculo: number;
	ativo?: string;
}

class ServiceAtualizaContrato {
	async execute({
		seq,
		opt_cod_cliente,
		data,
		vencimento,
		tx_instalacao,
		venc_instalacao,
		inicio_mens,
		valor_mens,
		percentual,
		base_calculo,
		ativo,
	}: iContrato) {
		const contratosRep = ContratoRep;

		const verCont = await contratosRep.findOne({
			where: { seq },
		});

		if (!verCont) {
			throw new Error("Contrato Não Encontrado");
		}

		var valInst = tx_instalacao * 100;
		var valMens = valor_mens * 100;
		var valPerc = percentual * 100;
		var valBase = base_calculo * 100;

		const _contrato = await contratosRep.update(
			{ seq: seq },
			{
				opt_cod_cliente,
				data,
				vencimento,
				tx_instalacao: valInst,
				venc_instalacao,
				inicio_mens,
				valor_mens: valMens,
				percentual: valPerc,
				base_calculo: valBase,
				ativo,
			}
		);

		const contratoAtualizado = await contratosRep.findOne({
			where: { seq },
		});

		return contratoAtualizado;
	}
}

export { ServiceAtualizaContrato };
