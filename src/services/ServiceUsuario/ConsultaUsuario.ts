
import { UserRep } from "../../repositories/UserRep";

interface iUsuariorequest {
    opt_codigo_usu?: string;
}

class ServiceConsUsuario {
    async execute({ opt_codigo_usu }: iUsuariorequest) {
        const usuario = UserRep;

        const user = await usuario.findOne({
            where: { opt_codigo_usu },
        });
        if (!user) {
            throw new Error("Nenhum Registro Encontrado");
        }

        return user;
    }
}

export { ServiceConsUsuario };
