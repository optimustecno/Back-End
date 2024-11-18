import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsuarioRep } from "../../repositories/UsuarioRep";

interface iUsuariorequest {
    opt_codigo_usu?: string;
    opt_usuario?: string;
    opt_email?: string;
    opt_senha?: string;
    opt_nivel?: string;
    ativo?: string;
}

class ServiceInsereUsuario {
    async execute({
        opt_usuario,
        opt_email,
        opt_senha,
        opt_nivel,
        ativo,
    }: iUsuariorequest) {
        const usuarioRep = getCustomRepository(UsuarioRep);

        if (!opt_usuario) {
            throw new Error("Usuario Sem Nome");
        }
        if (!opt_email) {
            throw new Error("Usuario Sem E-mail");
        }
        if (!opt_senha) {
            throw new Error("Usuario Sem Senha");
        }
        if (!opt_nivel) {
            throw new Error("Usuario Sem Nível");
        }
        const usuarioExistente = await usuarioRep.findOne({
            opt_email,
        });
        if (usuarioExistente) {
            throw new Error("Usuário Já Inserido!");
        }

        const SenhaHash = await hash(opt_senha, 8);

        const usuario = usuarioRep.create({
            opt_usuario,
            opt_email,
            opt_senha: SenhaHash,
            opt_nivel: '1',
            ativo,
        });

        await usuarioRep.save(usuario);

        return usuario;
    }
}

export { ServiceInsereUsuario };
