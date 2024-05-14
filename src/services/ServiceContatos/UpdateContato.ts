import { getCustomRepository } from "typeorm";
import { ContatosRep } from "../../repositories/ContatosRep";

interface iContato {
    seq?: string;
    opt_cod_cli?: string;
    opt_contato?: string;
    opt_fone?: string;
    opt_whatsapp?: string;
    opt_boletos?: string;
}

class ServiceAtualizaContato {
    async execute({
        seq,
        opt_cod_cli,
        opt_contato,
        opt_fone,
        opt_whatsapp,
        opt_boletos,
    }: iContato) {
        const contatosRep = getCustomRepository(ContatosRep);
        const Contato = await contatosRep.update(
            { seq },
            {
                opt_cod_cli,
                opt_contato,
                opt_fone,
                opt_whatsapp,
                opt_boletos,
            }
        );

        return {
            seq,
            opt_cod_cli,
            opt_contato,
            opt_fone,
            opt_whatsapp,
            opt_boletos,
        };
    }
}

export { ServiceAtualizaContato };
