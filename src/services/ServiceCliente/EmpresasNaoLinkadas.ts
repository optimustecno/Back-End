import { getCustomRepository } from "typeorm";
import { DadosOnRep } from "../../repositories/DadosOnRep";

interface iAppsCliente {
    opt_cod_cliente: string;
}

class ServiceConsultaNaoLinkadas {
    async execute({ opt_cod_cliente }: iAppsCliente) {
        const empLinkRep = getCustomRepository(DadosOnRep);

        const Links = await empLinkRep.find({ opt_cod_cliente });

        return Links;
    }
}

export { ServiceConsultaNaoLinkadas };
