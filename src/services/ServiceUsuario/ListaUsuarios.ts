import { Like } from "typeorm";
import { UserRep } from "../../repositories/UserRep";

interface iUsuariorequest {
    opt_usuario?: string;
    opt_email?: string;
    ativo?: string;
}

class ServiceListaUsuarios {
    async execute({ opt_usuario, opt_email, ativo }: iUsuariorequest) {
        const usuario = UserRep;

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

export { ServiceListaUsuarios };
