
import { ClientesRep } from "../../repositories/ClienteRep";

interface iCliente {
	opt_cod_cliente: string;
}

class ServiceBancoOn {
	async execute({ opt_cod_cliente }: iCliente) {
		const clientesRep = ClientesRep;
		const ClientesCad = await clientesRep.findOne({
			where: { opt_cod_cliente },
		});

		if (!ClientesCad) {
			throw new Error("Nenhum Registro Encontrado!");
		}

		const { opt_dns, opt_banco, opt_user, opt_password, opt_odbc } =
			ClientesCad;

		return { opt_dns, opt_banco, opt_user, opt_password, opt_odbc };
	}
}

export { ServiceBancoOn };
