import { getCustomRepository } from "typeorm";
import { Espera } from "../../utils/functions";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";

interface iCriaConvidado {
    opt_nome_convidado: string;
    opt_email_convidado: string;
    opt_fone_convidado: string;
    opt_acesso_convidado: string;
    opt_tipo_convidado: string;
    opt_finalidade: string;
    opt_aprovado: string;
}

class ServiceCriaConvidado {
    async execute({
        opt_nome_convidado,
        opt_email_convidado,
        opt_acesso_convidado,
        opt_tipo_convidado,
        opt_fone_convidado,
        opt_finalidade,
        opt_aprovado,
    }: iCriaConvidado) {
        const guestRep = getCustomRepository(ConvidadosRep);

        const _guest = await guestRep.create({
            opt_nome_convidado,
            opt_email_convidado,
            opt_acesso_convidado,
            opt_fone_convidado,
            opt_tipo_convidado,
            opt_finalidade,
            opt_aprovado,
        });

        await guestRep.save(_guest);

        await Espera(150);

        const guestGravado = await guestRep.findOne({
            opt_email_convidado,
        });

        return guestGravado;
    }
}

export { ServiceCriaConvidado };
