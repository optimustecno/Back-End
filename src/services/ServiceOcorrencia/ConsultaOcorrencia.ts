
import { OcorrenciasRep } from "../../repositories/OcorrenciasRep";

interface iOcorrencia {
    opt_cod_cliente: string;
}

class ServiceConsOcorrencia {
    async execute({ opt_cod_cliente }: iOcorrencia) {
        const ocorrenciaRep = OcorrenciasRep;
        const Ocorrencias = await ocorrenciaRep.find({
            where: { opt_cod_cliente },
            order: { opt_data_ocorrencia: "DESC" },
        });

        if (!Ocorrencias) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        return Ocorrencias;
    }
}

export { ServiceConsOcorrencia };
