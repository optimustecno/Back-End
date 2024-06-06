import { getCustomRepository, Like, Between, Not } from "typeorm";
import { ViewContatosRep } from "../../repositories/ViewContatosRep";

interface iFiltro {
    opt_nome_cliente?: any;
    opt_contato?: any;
    opt_cargo?: any;
    opt_fone?: any;
    offset?: any;
    take?: any;
}

class ServiceListaContatos {
    async execute({ opt_nome_cliente, opt_contato, opt_cargo, opt_fone, offset, take }: iFiltro) {
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

        Contatos = await conRep.find({
            where: {
                opt_nome_cliente: Like(`%${opt_nome_cliente}%`),
                opt_contato: Like(`%${opt_contato}%`),
                opt_cargo: Like(`%${opt_cargo}%`),
                opt_fone: Like(`%${opt_fone}%`),
                tipo: "F",
            },
            order: { opt_contato: "ASC", opt_nome_cliente: "ASC" },
            skip: offset,
            take: take,
        });

        if (!Contatos) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return Contatos;
    }
}

export { ServiceListaContatos };
