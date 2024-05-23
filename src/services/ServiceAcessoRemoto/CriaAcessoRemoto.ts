import { getCustomRepository } from "typeorm";
import { AcessoRemotoRep } from "../../repositories/AcessoRemotoRep";

interface iAcesso {
    opt_cod_cli: string;
    opt_contato: string;
    opt_fone: string;
    opt_cargo: string;
    opt_chave_remota: string
}

class ServiceCriaAcesso {
    async execute({ opt_cod_cli,
        opt_contato,
        opt_fone,
        opt_chave_remota,
        opt_cargo }: iAcesso) {

        const acessoRep = getCustomRepository(AcessoRemotoRep);

        if (!opt_cod_cli) {
            throw new Error("Não Foi Informado o Codigo do Cliente!");
        }
        if (!opt_contato) {
            throw new Error("Não Foi Informado o Nome do Terminal!");
        }
        if (!opt_fone) {
            throw new Error("Não Foi Informado o ID de Acesso!");
        }
        if (!opt_chave_remota){
            throw new Error("Não Foi Informada a Chave de Acesso!")
        }

        const TestaAcesso = await acessoRep.findOne({
            opt_fone,opt_cod_cli
        });

        if (TestaAcesso) {
            throw new Error("Acesso Existente!");
        }

        const _acesso = await acessoRep.create({
            opt_cod_cli,
            opt_contato,
            opt_fone,
            opt_cargo,
            tipo: "A",
            opt_chave_remota
        });

        await acessoRep.save(_acesso);

        const AcessoCad = await acessoRep.findOne({
            opt_cod_cli,
            opt_fone,
        });

        return AcessoCad;
    }
}

export { ServiceCriaAcesso };
