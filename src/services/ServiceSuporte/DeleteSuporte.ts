import { getCustomRepository } from "typeorm";
import { SuporteRep } from "../../repositories/SuporteRep";

interface iSuporte {
    seq: any;
}

class ServiceDeleteSuporte {
    async execute({ seq }: iSuporte) {
        const suporteRep = getCustomRepository(SuporteRep);

        const Suporte = await suporteRep.delete({ seq });

        return {
            message: "Suporte Removido",
        };
    }
}

export { ServiceDeleteSuporte };
