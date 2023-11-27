
import { SuporteRep } from "../../repositories/SuporteRep";

interface iSuporte {
    seq: any;
}

class ServiceDeleteSuporte {
    async execute({ seq }: iSuporte) {
        const suporteRep = SuporteRep;

        const Suporte = await suporteRep.delete({ seq });

        return {
            message: "Suporte Removido",
        };
    }
}

export { ServiceDeleteSuporte };
