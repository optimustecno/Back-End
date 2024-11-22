import { getCustomRepository, Like } from "typeorm";
import { ViewNotasRep } from "../../repositories/ViewNotasRep";

interface iFiltro {
    status?: any;
    sistema?: any;
    versao?: any;
    descricao?: any;
}

class countNotas {
    async execute({ status, sistema, versao, descricao }: iFiltro) {
        const notasRep = getCustomRepository(ViewNotasRep);

        if (!sistema) {
            sistema = "";
        }
        if (!versao) {
            versao = "";
        }
        if (!descricao) {
            descricao = "";
        }
        if (!status) {
            status = "";
        }
        const ContaNotas = await notasRep.count({
            where: {
                opt_sistema: Like(`%${sistema}%`),
                opt_versao: Like(`%${versao}%`),
                opt_descricao: Like(`%${descricao}%`),
                status: Like(`%${status}%`),
            },
        });
        return ContaNotas;
    }
}

export { countNotas };
