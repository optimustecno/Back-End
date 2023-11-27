import { ViewEmpLinkRep } from "../../repositories/ViewEmpLink";

interface iAppsCliente {
	opt_cod_cliente: string;
}

class ServiceConsultaLinks {
	async execute({ opt_cod_cliente }: iAppsCliente) {
		const empLinkRep = ViewEmpLinkRep;

		const Links = await empLinkRep.find({ where: { opt_cod_cliente } });

		return Links;
	}
}

export { ServiceConsultaLinks };
