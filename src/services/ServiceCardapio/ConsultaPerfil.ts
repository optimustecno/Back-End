import { getCustomRepository } from "typeorm";
import { CardapioCliRep } from "../../repositories/CardapioCliRep";

interface iPerfil {
    opt_cod_cliente: string;
}

class ConsultaPerfil {
    async execute({ opt_cod_cliente }: iPerfil) {
        const perfilRep = getCustomRepository(CardapioCliRep);

        const Perfil = await perfilRep.findOne(
            { opt_cod_cliente }
        );

        return Perfil;
    }
}

export { ConsultaPerfil };
