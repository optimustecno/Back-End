import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { ConvidadosRep } from "../../repositories/ConvidadosRep";

interface iAutenticaConvidado {
    opt_email_convidado: string;
    opt_acesso_convidado: string;
}

class AutorizaConvidado {
    async execute({ opt_email_convidado, opt_acesso_convidado }: iAutenticaConvidado) {
        const guest = getCustomRepository(ConvidadosRep);
        //usuario ok?
        const user = await guest.findOne({
            opt_email_convidado,
        });
        if (!user) {
            throw new Error("Email ou Senha Incorretos");
        }
        //senha ok?
        const bEncontrouSenha = await compare(opt_acesso_convidado, user.opt_acesso_convidado);
        if (!bEncontrouSenha) {
            throw new Error("Email ou Senha Incorretos");
        }
        const cCodigo = user.opt_seq_convidado.toString();
        //Gera Token
        const token = sign(
            {
                codigo: user.opt_seq_convidado,
                nome: user.opt_nome_convidado,
            },
            process.env.SECRETGUEST,
            {
                subject: cCodigo,
                expiresIn: "1d",
            }
        );
        return { codigo: cCodigo, nome: user.opt_nome_convidado, opt_tipo_convidado: user.opt_tipo_convidado, opt_aprovado: user.opt_aprovado ,token };
        
    }
}

export { AutorizaConvidado };
