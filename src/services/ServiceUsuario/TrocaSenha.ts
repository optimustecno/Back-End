import { hash, compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsuarioRep } from "../../repositories/UsuarioRep";

interface iUpdateSenha {
    opt_codigo_usu: string;
    senha_atual: string;
    nova_senha: string;
}

class ServiceTrocaSenha {
    async execute({ opt_codigo_usu, senha_atual, nova_senha }: iUpdateSenha) {
        const usuario = getCustomRepository(UsuarioRep);
        //usuario ok?
        const user = await usuario.findOne({
            opt_codigo_usu,
        });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        
        const bEncontrouSenha = await compare(senha_atual, user.opt_senha);
        if (!bEncontrouSenha) {
            throw new Error("Senha Incorreta");
        }

        const SenhaHash = await hash(nova_senha, 8);

        const _usuario = await usuario.update(
            { opt_codigo_usu: opt_codigo_usu },
            { opt_senha: SenhaHash }
        );

        return {
            message: "Dados Atualizados",
        };
    }
}

export { ServiceTrocaSenha };
