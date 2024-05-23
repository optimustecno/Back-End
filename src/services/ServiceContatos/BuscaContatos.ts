import { getCustomRepository } from "typeorm";
import { ContatosRep } from "../../repositories/ContatosRep";

interface iContato {
    opt_cod_cli: string;
    seq?: string;
}

class ServiceConsultaContatos {
    async execute({ opt_cod_cli, seq }: iContato) {
        const contatosRep = getCustomRepository(ContatosRep);
        var ContatosCli;
        if (!seq) {
            ContatosCli = await contatosRep.find({
                where: { opt_cod_cli, tipo: "F" },
            });
        } else {
            ContatosCli = await contatosRep.findOne({
                seq,
            });
        }

        return ContatosCli;
    }
}

export { ServiceConsultaContatos };
