import { hash, compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";

interface iUpdateSenha {
    opt_seq_convidado: string;
    senha_atual: string;
    nova_senha: string;
}

class ServiceTrocaSenhaConvidado {
    async execute({ opt_seq_convidado, senha_atual, nova_senha }: iUpdateSenha) {
        const usuario = getCustomRepository(ConvidadosRep);
        //usuario ok?
        const user = await usuario.findOne({
            opt_seq_convidado,
        });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        
        const bEncontrouSenha = await compare(senha_atual, user.opt_acesso_convidado);
        if (!bEncontrouSenha) {
            throw new Error("Senha Incorreta");
        }

        const SenhaHash = await hash(nova_senha, 8);

        const _usuario = await usuario.update(
            { opt_seq_convidado: opt_seq_convidado },
            { opt_acesso_convidado: SenhaHash }
        );

        return {
            message: "Dados Atualizados",
        };
    }
}

export { ServiceTrocaSenhaConvidado };
