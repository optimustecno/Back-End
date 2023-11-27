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

class ServiceUpdateUsu {
    async execute({
        opt_codigo_usu,
        opt_usuario,
        opt_email,
        ativo,
    }: iUsuariorequest) {
        const usuRep = getCustomRepository(UsuarioRep);

        if (!opt_codigo_usu) {
            throw new Error("Código do Usuário Não Informado");
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

export { ServiceUpdateUsu };
