import { getCustomRepository } from "typeorm";
import { ContatosRep } from "../../repositories/ContatosRep";

interface iContato {
    opt_cod_cli: string;
    opt_contato: string;
    opt_fone: string;
    opt_whatsapp: string;
    opt_boletos: string;
}

class ServiceCriaContato {
    async execute({ opt_cod_cli,
        opt_contato,
        opt_fone,
        opt_whatsapp,
        opt_boletos }: iContato) {

        const contatosRep = getCustomRepository(ContatosRep);

        if (!opt_cod_cli) {
            throw new Error("Não Foi Informado o Codigo do Cliente!");
        }
        if (!opt_contato) {
            throw new Error("Não Foi Informado o Nome do Contato!");
        }
        if (!opt_fone) {
            throw new Error("Não Foi Informado o Telefone do Contato!");
        }

        const TestaContato = await contatosRep.findOne({
            opt_fone,opt_cod_cli
        });

        if (TestaContato) {
            throw new Error("Contato Existente!");
        }

        const _contato = await contatosRep.create({
            opt_cod_cli,
            opt_contato,
            opt_fone,
            opt_whatsapp,
            opt_boletos,
        });

        await contatosRep.save(_contato);

        const ContatoCad = await contatosRep.findOne({
            opt_cod_cli,
            opt_fone,
        });

        return ContatoCad;
    }
}

export { ServiceCriaContato };
