import { getCustomRepository } from "typeorm";
import { AcessoRemotoRep } from "../../repositories/AcessoRemotoRep";

interface iAcesso {
    seq: string;
}

class ServiceDeleteAcesso {
    async execute({ seq }: iAcesso) {
        const acessoRep = getCustomRepository(AcessoRemotoRep);

        const Acesso = await acessoRep.delete({ seq });

        return {
            message: "Acesso Removido",
        };
    }
}

export { ServiceDeleteAcesso };
