import { getCustomRepository } from "typeorm";
import { ContatosRep } from "../../repositories/ContatosRep";

interface iContato {
    opt_cod_cli: string;
    seq?: string;
    whatsapp?: any;
    boleto?: any;
}

class ServiceConsultaContatos {
    async execute({ opt_cod_cli, seq, whatsapp, boleto }: iContato) {
        const contatosRep = getCustomRepository(ContatosRep);
        var ContatosCli;
        if (!seq) {
            if (!whatsapp && !boleto)
                ContatosCli = await contatosRep.find({
                    where: { opt_cod_cli, tipo: "F" },
                });
            else if (!whatsapp) {
                ContatosCli = await contatosRep.find({
                    where: { opt_cod_cli, tipo: "F", opt_boletos: "1" },
                });
            } else if (!boleto) {
                ContatosCli = await contatosRep.find({
                    where: { opt_cod_cli, tipo: "F", opt_whatsapp: "1" },
                });
            } else {
                ContatosCli = await contatosRep.find({
                    where: { opt_cod_cli, tipo: "F", opt_whatsapp: "1", opt_boletos: "1" },
                });
            }
        } else {
            ContatosCli = await contatosRep.findOne({
                seq,
            });
        }

        return ContatosCli;
    }
}

export { ServiceConsultaContatos };
