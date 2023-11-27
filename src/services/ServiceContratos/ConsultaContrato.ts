import { ContratoRep } from "../../repositories/ContratoRep";

//NEGAR ACESSO 403
interface iContrato {
	seq: string;
}

class ServiceConsultaContrato {
	async execute({ seq }: iContrato) {
		const contratoRep = ContratoRep;
		const ContratoCad = await contratoRep.findOne({
			where: { seq },
		});

		if (!ContratoCad) {
			throw new Error("Nenhum Registro Encontrado!");
		}

		return ContratoCad;
	}
}

export { ServiceConsultaContrato };
