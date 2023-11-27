
import { ClientesRep } from "../../repositories/ClienteRep";

//NEGAR ACESSO 403
interface iCliente {
    opt_cod_cliente: string;
}
class ServiceWabizCliente {
    async execute({ opt_cod_cliente }: iCliente) {
        const clientesRep = ClientesRep;
        const ClientesCad = await clientesRep.findOne({
            where:{opt_cod_cliente},
        });

        if (!ClientesCad) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        const { opt_login_wabiz, opt_acesso_wabiz } = ClientesCad;

        return { opt_login_wabiz, opt_acesso_wabiz };
    }
}

export { ServiceWabizCliente };
