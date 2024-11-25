import { getCustomRepository, Like } from "typeorm";
import { ViewNotasRep } from "../../repositories/ViewNotasRep";

interface iFiltro {
    status?: any;
    sistema?: any;
    versao?: any;
    descricao?: any;
    offset?: any;
    take?: any;
}

class ServiceListaNotas {
    async execute({
        status,
        sistema,
        versao,
        descricao,
        offset,
        take
    }: iFiltro) {
        const notasRep = getCustomRepository(ViewNotasRep);
        var NotasVersao;

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
        NotasVersao = await notasRep.find({
            where: {
                opt_sistema: Like(`%${sistema}%`),
                opt_versao: Like(`%${versao}%`),
                opt_descricao: Like(`%${descricao}%`),
                status: Like(`%${status}%`),
            },
            order: { status: "ASC", seq: "ASC" },
            skip: offset,
            take: take,
        });

        if (!NotasVersao) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return NotasVersao;
    }
}

export { ServiceListaNotas };
