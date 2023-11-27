import { ContratoRep } from "../../repositories/ContratoRep";

interface iContrato {
	opt_cod_cliente: string;
	data: string;
	vencimento: string;
	tx_instalacao?: number;
	venc_instalacao?: string;
	inicio_mens: string;
	valor_mens: number;
	percentual: number;
	base_calculo: number;
	ativo?: string;
}
class ServiceCriaContrato {
	async execute({
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

		var dataCria = `${data} 00:00:01`;

		const verCont = await contratosRep.findOne({
			where: { opt_cod_cliente, data: new Date(data) },
		});

		if (verCont) {
			throw new Error("Contrato já criado");
		}

		var valInst = tx_instalacao * 100;
		var valMens = valor_mens * 100;
		var valPerc = percentual * 100;
		var valBase = base_calculo * 100;

		const _contrato = await contratosRep.create({
			opt_cod_cliente,
			data: dataCria,
			vencimento,
			tx_instalacao: valInst,
			venc_instalacao,
			inicio_mens,
			valor_mens: valMens,
			percentual: valPerc,
			base_calculo: valBase,
			ativo,
		});

		await contratosRep.save(_contrato);

		const contratoCriado = await contratosRep.findOne({
			where: { opt_cod_cliente, data: new Date(data) },
		});

		return contratoCriado;
	}
}

export { ServiceCriaContrato };
