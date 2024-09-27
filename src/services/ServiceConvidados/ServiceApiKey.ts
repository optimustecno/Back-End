import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";

interface iAutenticaConvidado {
    opt_seq_convidado: string;
}

class ServiceApiKey {
    async execute({ opt_seq_convidado }: iAutenticaConvidado) {
        const guest = getCustomRepository(ConvidadosRep);
        //usuario ok?
        const user = await guest.findOne({
            opt_seq_convidado,
        });
        if (!user) {
            throw new Error("Convidado Não Encontrado");
        }
        //Gera Token
        const cCodigo = opt_seq_convidado.toString();
        const token = sign(
            {
                codigo: user.opt_seq_convidado,
                nome: user.opt_nome_convidado,
            },
            process.env.SECRETGUEST,
            {
                subject: cCodigo,
            }
        );

        const atGuest = await guest.update(
            { opt_seq_convidado },
            { opt_token: token }
        )

        return { codigo: opt_seq_convidado, nome: user.opt_nome_convidado, opt_tipo_convidado: user.opt_tipo_convidado, opt_aprovado: user.opt_aprovado ,token };
        
    }
}

export { ServiceApiKey };
