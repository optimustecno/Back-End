import { getCustomRepository } from "typeorm";
import { MensagensRep } from "../../repositories/MensagensRep";

interface iMensagem {
    Seq: string;
    opt_seq_contato: string;
    opt_numero_fone: string;
    opt_texto: string;
    opt_url_arquivo: string;
    opt_apelido_arq: string;
    opt_status: string;
    opt_usuario: string;
}

class ServiceAtualizaMensagem {
    async execute({
        Seq,
        opt_seq_contato,
        opt_numero_fone,
        opt_texto,
        opt_url_arquivo,
        opt_apelido_arq,
        opt_status,
        opt_usuario,
    }: iMensagem) {
        const setorRep = getCustomRepository(MensagensRep);

        if (!Seq) {
            throw new Error("Código da Mensagem Não Informado");
        }

        const _setor = await setorRep.update(
            { Seq },
            {
                opt_seq_contato,
                opt_numero_fone,
                opt_texto,
                opt_url_arquivo,
                opt_apelido_arq,
                opt_status,
                opt_usuario,
            }
        );

        return {
            Seq,
            opt_seq_contato,
            opt_numero_fone,
            opt_texto,
            opt_url_arquivo,
            opt_apelido_arq,
            opt_status,
            opt_usuario,
        };
    }
}

export { ServiceAtualizaMensagem };
