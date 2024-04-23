import { getCustomRepository, Like, Between, Not } from "typeorm";
import { ViewSuporteRep as SuporteRep } from "../../repositories/ViewSuporteRep";

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
        console.log(`${dataInicial} até ${dataFinal}`)
        if (!status) {
            Suportes = await supRep.find({
                where: {
                    opt_nome_cliente: Like(`%${cliente}%`),
                    titulo: Like(`%${titulo}%`),
                    prioridade: Like(`%${prioridade}%`),
                    status: Not("4"),
                    hora: Like(`%${hora}%`),
                    data: Between(dataInicial, dataFinal),
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
