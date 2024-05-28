import { getCustomRepository } from "typeorm";
import { MensagensRep } from "../../repositories/MensagensRep";

interface iCriaOcorrencia {
    opt_seq_msg: string;
    opt_seq_contato: string;
    opt_numero_fone: string;
    opt_texto: string;
    opt_url_arquivo: string;
    opt_apelido_arq: string;
    opt_usuario: string;
}

class ServiceCriaMensagem {
    async execute({
        opt_seq_msg,
        opt_seq_contato,
        opt_numero_fone,
        opt_texto,
        opt_url_arquivo,
        opt_apelido_arq,
        opt_usuario
    }: iCriaOcorrencia) {
        const mensagemRep = getCustomRepository(MensagensRep);

        const _mensagem = await mensagemRep.create({
            opt_seq_msg,
            opt_seq_contato,
            opt_numero_fone,
            opt_texto,
            opt_url_arquivo,
            opt_apelido_arq,
            opt_usuario
        });

        await mensagemRep.save(_mensagem);

        return _mensagem;
    }
}
export { ServiceCriaMensagem };
