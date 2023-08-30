import { getCustomRepository, Not } from "typeorm";
import { ViewEmpLinkRep } from "../../repositories/ViewEmpLink";

interface iAppsCliente {
    opt_cod_cliente: string;
}

class ServiceConsultaNaoLinkadas {
    async execute({ opt_cod_cliente }: iAppsCliente) {
        const empLinkRep = getCustomRepository(ViewEmpLinkRep);

        const Links = await empLinkRep.find({ opt_cod_cliente: Not(opt_cod_cliente) });

        return Links;
    }
}

export { ServiceConsultaNaoLinkadas };
