import { getCustomRepository, Like, Between, Not } from "typeorm";
import { ViewContatosRep } from "../../repositories/ViewContatosRep";

interface iFiltro {
    opt_nome_cliente?: any;
    opt_contato?: any;
    opt_cargo?: any;
    opt_fone?: any;
}

class ServiceContaContatos {
    async execute({ opt_nome_cliente, opt_contato, opt_cargo, opt_fone }: iFiltro) {
        const conRep = getCustomRepository(ViewContatosRep);
        var Contatos;

        if (!opt_nome_cliente) {
            opt_nome_cliente = "";
        }
        if (!opt_contato) {
            opt_contato = "";
        }
        if (!opt_cargo) {
            opt_cargo = "";
        }
        if (!opt_fone) {
            opt_fone = "";
        }

        Contatos = await conRep.count({
            where: {
                opt_nome_cliente: Like(`%${opt_nome_cliente}%`),
                opt_contato: Like(`%${opt_contato}%`),
                opt_cargo: Like(`%${opt_cargo}%`),
                opt_fone: Like(`%${opt_fone}%`),
                tipo: "F",
            },
        });

        if (!Contatos) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return Contatos;
    }
}

export { ServiceContaContatos };
