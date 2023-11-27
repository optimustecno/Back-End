import { Ocorrencias } from "../entities/Ocorrencias";
import { AppDataSource } from "../data-source";
export const OcorrenciasRep = AppDataSource.getRepository(Ocorrencias).extend(
	{}
);
