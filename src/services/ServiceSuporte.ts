import { getCustomRepository } from "typeorm";
import { SuporteRep } from "../repositories/SuporteRep";

interface iSuporte {
    seq?: any;
    data?: any;
    hora?: any;
    opt_cod_cliente?: any;
    status?: any;
    prioridade?: any;
    atendente?: string;
    titulo?: any;
    descricao?: any;
    contato?: any;
    resolucao?: any;
    cod_setor?: any;
}
class ServiceCriaSuporte {
    async execute({
        data,
        hora,
        opt_cod_cliente,
        status,
        prioridade,
        atendente,
        titulo,
        descricao,
        contato,
        resolucao,
        cod_setor,
    }: iSuporte) {
        const supRep = getCustomRepository(SuporteRep);

        /* const verCad = await supRep.query(
            `SELECT seq FROM opt_suporte WHERE data = '${data}' and hora = '${hora}' and opt_cod_cliente = '${opt_cod_cliente}'`
        ); */

        const verCad = await supRep.findOne({
            titulo,
            hora,
            opt_cod_cliente,
        });

        if (verCad) {
            throw new Error("Suporte Já Cadastrado!");
        }

        const _suporte = await supRep.create({
            data,
            hora,
            opt_cod_cliente,
            status,
            prioridade,
            atendente,
            titulo,
            descricao,
            contato,
            resolucao,
            cod_setor,
        });

        await supRep.save(_suporte);

        return _suporte;
    }
}
class consultaSuporte {
    async execute({ seq }: iSuporte) {
        const suporteRep = getCustomRepository(SuporteRep);

        if (!seq) {
            throw new Error("Não Foi Informado o Identificador do Suporte!");
        }

        const Suporte = await suporteRep.findOne({
            where: { seq },
            relations: ["cliente", "setor", "Usuario"],
        });

        return Suporte;
    }
}
class ServiceAtualizaSuporte {
    async execute({
        seq,
        data,
        hora,
        opt_cod_cliente,
        status,
        prioridade,
        atendente,
        titulo,
        descricao,
        contato,
        resolucao,
        cod_setor,
    }: iSuporte) {
        const suporteRep = getCustomRepository(SuporteRep);
        const Suporte = await suporteRep.update(
            { seq },
            {
                data,
                hora,
                opt_cod_cliente,
                status,
                prioridade,
                atendente,
                titulo,
                descricao,
                contato,
                resolucao,
                cod_setor,
            }
        );
        // console.log(`
        //     data: ${data},
        //     hora: ${hora},
        //     codcli: ${opt_cod_cliente},
        //     status: ${status},
        //     prioridade: ${prioridade},
        //     atendente: ${atendente},
        //     titulo: ${titulo},
        //     descricao: ${descricao},
        //     contato: ${contato},
        //     resolucao: ${resolucao},
        //     cod_setor: ${cod_setor}`);
        return {
            data,
            hora,
            opt_cod_cliente,
            status,
            prioridade,
            atendente,
            titulo,
            descricao,
            contato,
            resolucao,
            cod_setor,
        };
    }
}
class ServiceDeleteSuporte {
    async execute({ seq }: iSuporte) {
        const suporteRep = getCustomRepository(SuporteRep);

        const Suporte = await suporteRep.delete({ seq });

        //const Suporte = await suporteRep.remove(seq);

        //await suporteRep.query(`DELETE FROM opt_suporte WHERE seq = ${seq}`);

        return {
            message: "Suporte Removido",
        };
    }
}

export {
    ServiceCriaSuporte,
    consultaSuporte,
    ServiceAtualizaSuporte,
    ServiceDeleteSuporte,
};
