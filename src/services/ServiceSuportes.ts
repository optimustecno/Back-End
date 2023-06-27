import { getCustomRepository, Like, Between } from "typeorm";
import { ViewSuporteRep as SuporteRep } from "../repositories/ViewSuporteRep";

interface iFiltro {
    status?: any;
    cliente?: any;
    dataInicial?: any;
    dataFinal?: any;
    hora?: any;
    titulo?: any;
    prioridade?: any;
    offset?: any;
}

interface iCons {
    seq: string;
}

class countSuportes {
    async execute({
        status,
        cliente,
        dataInicial,
        dataFinal,
        titulo,
        prioridade,
    }: iFiltro) {
        const ocorrenciaRep = getCustomRepository(SuporteRep);
        var ContaSuportes;

        if (!cliente) {
            cliente = "";
        }
        if (!titulo) {
            titulo = "";
        }
        if (!prioridade) {
            prioridade = "";
        }
        if (!status) {
            status = "";
        }

        if (!dataInicial && !dataFinal) {
            ContaSuportes = await ocorrenciaRep.count();
        } else if (!dataInicial) {
            throw new Error("Não Foi Informada a Data Inicial!");
        } else if (!dataFinal) {
            throw new Error("Não Foi Informada a Data Final!");
        } else {
            console.log(prioridade);
            ContaSuportes = await ocorrenciaRep.count({
                where: {
                    opt_nome_cliente: Like(`%${cliente}%`),
                    titulo: Like(`%${titulo}%`),
                    prioridade: Like(`%${prioridade}%`),
                    status: Like(`%${status}%`),
                    data: Between(dataInicial, dataFinal),
                },
            });
        }
        return ContaSuportes;
    }
}

class ServiceConsultaSuportes {
    async execute({
        status,
        cliente,
        dataInicial,
        dataFinal,
        hora,
        offset,
        titulo,
        prioridade,
    }: iFiltro) {
        const supRep = getCustomRepository(SuporteRep);
        var Suportes;

        if (!cliente) {
            cliente = "";
        }
        if (!titulo) {
            titulo = "";
        }
        if (!prioridade) {
            prioridade = "";
        }
        if (!status) {
            status = "";
        }
        if (!hora) {
            hora = "";
        }

        Suportes = await supRep.find({
            where: {
                opt_nome_cliente: Like(`%${cliente}%`),
                titulo: Like(`%${titulo}%`),
                prioridade: Like(`%${prioridade}%`),
                status: Like(`%${status}%`),
                hora: Like(`%${hora}%`),
                data: Between(dataInicial, dataFinal),
            },
            order: { prioridade: "ASC", data: "ASC" },
            skip: offset,
            take: 10,
        });

        if (!Suportes) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return Suportes;
    }
}

export { ServiceConsultaSuportes, countSuportes };
