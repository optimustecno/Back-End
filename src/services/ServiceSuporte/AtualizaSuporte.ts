import { getCustomRepository } from "typeorm";
import { SuporteRep } from "../../repositories/SuporteRep";

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
    canal_atendimento?: any;
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
        canal_atendimento,
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
                canal_atendimento,
            }
        );

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
            canal_atendimento,
        };
    }
}

export { ServiceAtualizaSuporte };
