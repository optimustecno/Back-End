import { getCustomRepository } from "typeorm";
import { ViewVinculosRep } from "../../repositories/ViewVinculosRep";

interface iConv {
    opt_cod_cliente: any;
}

class ServiceVinculoFood {
    async execute({ opt_cod_cliente }: iConv) {
        const vinculosRep = getCustomRepository(ViewVinculosRep);

        const Guests = await vinculosRep.find({
            opt_cod_cliente,
        });

        if (!Guests) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        return Guests;
    }
}

export { ServiceVinculoFood };
