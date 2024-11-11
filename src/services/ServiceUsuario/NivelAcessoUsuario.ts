import { getCustomRepository } from "typeorm";
import { UsuarioRep } from "../../repositories/UsuarioRep";

interface iUpdateNivel {
    opt_codigo_usu: string;
    opt_nivel: string;
}

class ServiceUpdateNivelAcesso {
    async execute({ opt_codigo_usu, opt_nivel }: iUpdateNivel) {
        const usuario = getCustomRepository(UsuarioRep);
        //usuario ok?
        const user = await usuario.findOne({
            opt_codigo_usu,
        });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        
        const _usuario = await usuario.update(
            { opt_codigo_usu: opt_codigo_usu },
            { opt_nivel: opt_nivel }
        );

        return {
            message: "Dados Atualizados",
        };
    }
}

export { ServiceUpdateNivelAcesso };
