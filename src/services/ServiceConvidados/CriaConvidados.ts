import { hash } from "bcryptjs";
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
    opt_data_cad: string;
}

class ServiceCriaConvidado {
    async execute({
        opt_nome_convidado,
        opt_email_convidado,
        opt_acesso_convidado,
        opt_tipo_convidado,
        opt_fone_convidado,
        opt_data_cad,
        opt_finalidade,
    }: iCriaConvidado) {
        const guestRep = getCustomRepository(ConvidadosRep);

        const convidadaExiste = await guestRep.findOne({opt_email_convidado});
        if (convidadaExiste){
            console.log(convidadaExiste)
            throw new Error("E-mail já Cadastrado como Convidado!");
        }

        const SenhaHash = await hash(opt_acesso_convidado, 8);

        const _guest = await guestRep.create({
            opt_nome_convidado,
            opt_email_convidado,
            opt_acesso_convidado: SenhaHash,
            opt_fone_convidado,
            opt_tipo_convidado,
            opt_finalidade,
            opt_data_cad,
            opt_aprovado: '0',
        });

        await guestRep.save(_guest);

        await Espera(150);

        const guestGravado = await guestRep.findOne({
            opt_email_convidado,
        });

        return {opt_seq_convidado: guestGravado.opt_seq_convidado,
                opt_nome_convidado,
                opt_email_convidado,
                opt_fone_convidado,
                opt_tipo_convidado,
                opt_finalidade};
    }
}

export { ServiceCriaConvidado };
