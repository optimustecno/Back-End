import { getCustomRepository, Like, Between, Not } from "typeorm";
import { ViewSuporteRep as SuporteRep } from "../../repositories/ViewSuporteRep";

interface iFiltro {
    status?: any;
    cliente?: any;
    dataInicial?: any;
    dataFinal?: any;
    contato?: any;
    hora?: any;
    titulo?: any;
    prioridade?: any;
    offset?: any;
    setor?: any;
}

class ServiceListaSuportes {
    async execute({
        status,
        cliente,
        dataInicial,
        dataFinal,
        hora,
        offset,
        titulo,
        prioridade,
        setor,
        contato
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
        if (!hora) {
            hora = "";
        }
        if (!setor) {
            setor = "";
        }
        if (!contato){
            contato = "";
        }
        if (!status) {
            Suportes = await supRep.find({
                where: {
                    opt_nome_cliente: Like(`%${cliente}%`),
                    titulo: Like(`%${titulo}%`),
                    prioridade: Like(`%${prioridade}%`),
                    status: Not("4"),
                    hora: Like(`%${hora}%`),
                    data: Between(dataInicial, dataFinal),
                    setor: Like(`%${setor}%`),
                    contato: Like(`%${contato}%`)
                },
                order: { prioridade: "ASC", data: "ASC" },
                skip: offset,
                take: 10,
            });
        } else {
            Suportes = await supRep.find({
                where: {
                    opt_nome_cliente: Like(`%${cliente}%`),
                    titulo: Like(`%${titulo}%`),
                    prioridade: Like(`%${prioridade}%`),
                    status,
                    hora: Like(`%${hora}%`),
                    data: Between(dataInicial, dataFinal),
                    setor: Like(`%${setor}%`),
                    contato: Like(`%${contato}%`)
                },
                order: { prioridade: "ASC", data: "ASC" },
                skip: offset,
                take: 10,
            });
        }

        if (!Suportes) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return Suportes;
    }
}

export { ServiceListaSuportes };
