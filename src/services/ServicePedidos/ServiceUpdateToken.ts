import { getCustomRepository } from "typeorm";
import { CadAppRep } from "../../repositories/CadAppRep";

interface iNovoToken {
    token: string;
    seq: string;
}

class ServiceUpdateToken {
    async execute({ seq, token }: iNovoToken) {
        const cadAppRep = getCustomRepository(CadAppRep);

        const atualizaNovoStatus = await cadAppRep.update(
            { seq },
            { token }
        );

        return {
            token,
        };
    }
}

export { ServiceUpdateToken };
