import { hash, compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";

interface iUpdateSenha {
    opt_seq_convidado: string;
    nova_senha: string;
}

class ServiceAdmSenhaConvidado {
    async execute({ opt_seq_convidado, nova_senha }: iUpdateSenha) {
        const usuario = getCustomRepository(ConvidadosRep);
        //usuario ok?
        const user = await usuario.findOne({
            opt_seq_convidado,
        });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        if (!nova_senha) {
            nova_senha = process.env.ACESSO_PADRAO.toString();
        }

        const SenhaHash = await hash(nova_senha, 8);

        const _usuario = await usuario.update(
            { opt_seq_convidado: opt_seq_convidado },
            { opt_acesso_convidado: SenhaHash }
        );

        return {
            message: `Nova Senha: ${nova_senha}`,
        };
    }
}

export { ServiceAdmSenhaConvidado };
