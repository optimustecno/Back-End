import { hash, compare } from "bcryptjs";
import { getCustomRepository, Like } from "typeorm";
import { UsuarioRep } from "../repositories/UsuarioRep";
import { UserRep } from "../repositories/UserRep";

interface iUsuariorequest {
    opt_codigo_usu?: string;
    opt_usuario?: string;
    opt_email?: string;
    opt_senha?: string;
    opt_nivel?: string;
    ativo?: string;
}

interface iUpdateSenha {
    opt_codigo_usu: string;
    senha_atual: string;
    nova_senha: string;
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
            opt_nivel,
            ativo,
        });

        await usuarioRep.save(usuario);

        return usuario;
    }
}

class ServiceUpdateUsu {
    async execute({
        opt_codigo_usu,
        opt_usuario,
        opt_email,
        ativo,
    }: iUsuariorequest) {
        const usuRep = getCustomRepository(UsuarioRep);

        if (!opt_codigo_usu) {
            throw new console.error("Código do Usuário Não Informado");
        }

        const _usuario = await usuRep.update(
            { opt_codigo_usu: opt_codigo_usu },
            {
                opt_usuario,
                opt_email,
                ativo,
            }
        );
        return {
            message: "Dados Atualizados",
        };
    }
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
        //senha ok?
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

class ServiceUsuario {
    async execute({ opt_codigo_usu }: iUsuariorequest) {
        const usuario = getCustomRepository(UserRep);

        const user = await usuario.findOne({
            where: { opt_codigo_usu },
        });
        if (!user) {
            throw new Error("Nenhum Registro Encontrado");
        }

        return user;
    }
}

class ServiceUsuarios {
    async execute({ opt_usuario, opt_email, ativo }: iUsuariorequest) {
        const usuario = getCustomRepository(UserRep);

        //console.log(`${opt_usuario}, ${opt_email}`);

        const user = await usuario.find({
            where: {
                opt_usuario: Like(`%${opt_usuario}%`),
                opt_email: Like(`%${opt_email}%`),
                ativo: Like(`%${ativo}%`),
            },
            order: { opt_usuario: "ASC" },
        });
        if (!user) {
            throw new Error("Nenhum Registro Encontrado");
        }

        return user;
    }
}

export {
    ServiceInsereUsuario,
    ServiceUpdateUsu,
    ServiceTrocaSenha,
    ServiceUsuario,
    ServiceUsuarios,
};
