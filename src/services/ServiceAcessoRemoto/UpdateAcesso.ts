import { getCustomRepository } from "typeorm";
import { AcessoRemotoRep } from "../../repositories/AcessoRemotoRep";

interface iAcesso {
    seq?: string;
    opt_cod_cli?: string;
    opt_contato?: string;
    opt_fone?: string;
    opt_chave_remota?: string;
    opt_cargo?: string
}

class ServiceAtualizaAcesso {
    async execute({
        seq,
        opt_cod_cli,
        opt_contato,
        opt_fone,
        opt_chave_remota,
        opt_cargo
    }: iAcesso) {
        const acessoRep = getCustomRepository(AcessoRemotoRep);
        const Acesso = await acessoRep.update(
            { seq },
            {
                opt_cod_cli,
                opt_contato,
                opt_fone,
                opt_chave_remota,
                opt_cargo
            }
        );

        return {
            seq,
            opt_cod_cli,
            opt_contato,
            opt_fone,
            opt_chave_remota,
            opt_cargo
        };
    }
}

export { ServiceAtualizaAcesso };
