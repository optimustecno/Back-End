import { getCustomRepository, Like, Between } from "typeorm";
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

export { ServiceListaSuportes };
