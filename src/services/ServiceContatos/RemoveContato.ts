import { getCustomRepository } from "typeorm";
import { ContatosRep } from "../../repositories/ContatosRep";

interface iContato {
    seq: string;
}

class ServiceDeleteContato {
    async execute({ seq }: iContato) {
        const contatosRep = getCustomRepository(ContatosRep);

        const Contato = await contatosRep.delete({ seq });

        return {
            message: "Contato Removido",
        };
    }
}

export { ServiceDeleteContato };
