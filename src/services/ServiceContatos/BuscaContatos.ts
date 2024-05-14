import { getCustomRepository } from "typeorm";
import { ContatosRep } from "../../repositories/ContatosRep";

interface iContato{
    opt_cod_cli: string;
    seq?: string;
}

class ServiceConsultaContatos {
    async execute({opt_cod_cli, seq}: iContato) {
        
        const contatosRep = getCustomRepository(ContatosRep);
        var ContatosCli;
        if (!seq){
            ContatosCli = await contatosRep.find({
                opt_cod_cli
            });
        }
        else{
            ContatosCli = await contatosRep.find({
                seq
            });
        }

        return ContatosCli;
    }
}

export { ServiceConsultaContatos };
