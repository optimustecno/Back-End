import { getCustomRepository } from "typeorm";
import { ValidaCardapio } from "../../utils/functions";
import { CardapioCliRep } from "../../repositories/CardapioCliRep";

interface iPerfil {
    opt_cod_cliente: string;
}

class ConsultaPerfil {
    async execute({ opt_cod_cliente }: iPerfil) {
        const Valida = new ValidaCardapio();
        const bUsaCardapio = await Valida.execute({ opt_cod_cliente });
        if (!bUsaCardapio) {
            throw new Error("Cardápio Digital Indisponível perfil");
        }

        const perfilRep = getCustomRepository(CardapioCliRep);

        const Perfil = await perfilRep.findOne({  opt_cod_cliente });
        return Perfil;
    }
}

export { ConsultaPerfil };
