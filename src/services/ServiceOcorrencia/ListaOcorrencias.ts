import { getCustomRepository, Between } from "typeorm";
import { OcorrenciasRep } from "../../repositories/OcorrenciasRep";

interface iCons {
    Skip: number;
    dataIni: string;
    dataFim: string;
}

class ServiceConsOcorrencias {
    async execute({ Skip, dataIni, dataFim }: iCons) {
        const ocorrenciaRep = getCustomRepository(OcorrenciasRep);
        var Ocorrencias;

        if (!dataIni && !dataFim) {
            Ocorrencias = await ocorrenciaRep.find({
                order: { opt_data_ocorrencia: "DESC" },
                skip: Skip,
                take: 10,
            });
        } else if (!dataIni) {
            throw new Error("Não Foi Informada a Data Inicial!");
        } else if (!dataFim) {
            throw new Error("Não Foi Informada a Data Final!");
        } else {
            Ocorrencias = await ocorrenciaRep.find({
                where: { opt_data_ocorrencia: Between(dataIni, dataFim) },
                order: { opt_data_ocorrencia: "DESC" },
                skip: Skip,
                take: 10,
            });
        }
        if (!Ocorrencias) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        return Ocorrencias;
    }
}

export { ServiceConsOcorrencias };
