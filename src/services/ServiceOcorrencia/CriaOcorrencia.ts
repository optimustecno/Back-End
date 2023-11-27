import { getCustomRepository } from "typeorm";
import { OcorrenciasRep } from "../../repositories/OcorrenciasRep";

interface iCriaOcorrencia {
    opt_cod_cliente: string;
    opt_nome_cliente: string;
    opt_data_ocorrencia: Date;
    opt_obs: string;
    opt_tipo_ocorrencia: string;
}

class ServiceCriaOcorrencia {
    async execute({
        opt_cod_cliente,
        opt_nome_cliente,
        opt_data_ocorrencia,
        opt_obs,
        opt_tipo_ocorrencia,
    }: iCriaOcorrencia) {
        const ocorrenciaRep = getCustomRepository(OcorrenciasRep);

        const _ocorrencia = await ocorrenciaRep.create({
            opt_cod_cliente,
            opt_nome_cliente,
            opt_data_ocorrencia,
            opt_obs,
            opt_tipo_ocorrencia,
        });

        await ocorrenciaRep.save(_ocorrencia);

        return _ocorrencia;
    }
}
export { ServiceCriaOcorrencia };
