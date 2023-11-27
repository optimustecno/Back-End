import { ContratoRep } from "../../repositories/ContratoRep";

//NEGAR ACESSO 403
interface iContrato {
	opt_cod_cliente: string;
}

class ServiceContratosCliente {
	async execute({ opt_cod_cliente }: iContrato) {
		const contratoRep = ContratoRep;
		const ContratoCad = await contratoRep.find({
			where: { opt_cod_cliente },
		});

		if (!ContratoCad) {
			throw new Error("Nenhum Registro Encontrado!");
		}

		return ContratoCad;
	}
}

export { ServiceContratosCliente };
