import { getCustomRepository } from "typeorm";
//import { Espera } from "../../utils/functions";
import { ClientesRep } from "../../repositories/ClienteRep";
import { ConvidadosClientesRep } from "../../repositories/ConvidadosCliRep";

interface iCriaVinculo {
    opt_seq_convidado: string;
    uuid_cliente: string;
    data_insercao: string;
}

class ServiceCriaVinculo {
    async execute({
        opt_seq_convidado,
        uuid_cliente,
        data_insercao
    }: iCriaVinculo) {
        const ClienteDev = getCustomRepository(ConvidadosClientesRep);

        const ClienteRep = getCustomRepository(ClientesRep)

        const cliente = await ClienteRep.findOne({opt_uid_cli: uuid_cliente})

        if (!cliente){
            throw new Error("Cliente Não Encontrado!");
        }

        const vinculoExiste = await ClienteDev.findOne({opt_seq_convidado, opt_cod_cliente: cliente.opt_cod_cliente});
        if (vinculoExiste){
            // console.log(vinculoExiste)
            throw new Error("Cliente Já Vinculado ao Desenvolvedor!");
        }

        const vinculo = await ClienteDev.create({
            opt_seq_convidado,
            opt_cod_cliente: cliente.opt_cod_cliente,
            data_insercao
        });

        await ClienteDev.save(vinculo);

        return {opt_seq_convidado,
                opt_cod_cliente: cliente.opt_cod_cliente,
                data_insercao
        };
    }
}

export { ServiceCriaVinculo };
