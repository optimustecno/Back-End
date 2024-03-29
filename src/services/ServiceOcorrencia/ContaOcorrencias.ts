import { getCustomRepository, Between } from "typeorm";
import { OcorrenciasRep } from "../../repositories/OcorrenciasRep";

interface iConta {
    dataIni: string;
    dataFim: string;
}

class countOcorrencias {
    async execute({ dataIni, dataFim }: iConta) {
        const ocorrenciaRep = getCustomRepository(OcorrenciasRep);
        var ContaOcorrencias;
        if (!dataIni && !dataFim) {
            ContaOcorrencias = await ocorrenciaRep.count();
        } else if (!dataIni) {
            throw new Error("Não Foi Informada a Data Inicial!");
        } else if (!dataFim) {
            throw new Error("Não Foi Informada a Data Final!");
        } else {
            ContaOcorrencias = await ocorrenciaRep.count({
                where: { opt_data_ocorrencia: Between(dataIni, dataFim) },
            });
        }

        return ContaOcorrencias;
    }
}

export { countOcorrencias };
