
import { ClientesRep } from "../../repositories/ClienteRep";

interface iCadCliente {
	opt_cod_cliente?: string;
	opt_nome_cliente: string;
	opt_endereco: string;
	opt_bairro: string;
	opt_cep: string;
	opt_cidade: string;
	opt_uf: string;
	opt_doc1: string;
	opt_doc2: string;
	opt_nome_sistema?: string;
}

class ServiceCriaCliente {
	async execute({
		opt_nome_cliente,
		opt_endereco,
		opt_bairro,
		opt_cep,
		opt_cidade,
		opt_uf,
		opt_doc1,
		opt_doc2,
	}: iCadCliente) {
		const clientesRep = ClientesRep;

		const verCad = await clientesRep.findOne({
			where: { opt_doc1 },
		});

		if (verCad) {
			throw new Error("CPF / CNPJ já incluido no cadastro");
		}

		const _cliente = await clientesRep.create({
			opt_nome_cliente,
			opt_endereco,
			opt_bairro,
			opt_cep,
			opt_cidade,
			opt_uf,
			opt_doc1,
			opt_doc2,
		});

		await clientesRep.save(_cliente);

		const ClienteCad = await clientesRep.findOne({
			where: {
				opt_nome_cliente,
				opt_doc1,
			},
		});

		return ClienteCad;
	}
}

export { ServiceCriaCliente };
