import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../../repositories/ClienteRep";

interface iCadCliente {
    opt_cod_cliente?: string;
    opt_nome_cliente: string;
    opt_endereco: string;
    opt_bairro: string;
    opt_cep: string;
    opt_cidade: string;
    opt_uf: string;
    opt_doc1: string;
    opt_doc2: string;
    opt_nome_sistema?: string;
    opt_cardapio_digital?: string;
    opt_uid_cli: string;
}

class ServiceCriaCliente {
    async execute({
        opt_nome_cliente,
        opt_endereco,
        opt_bairro,
        opt_cep,
        opt_cidade,
        opt_uf,
        opt_doc1,
        opt_doc2,
        opt_cardapio_digital,
        opt_uid_cli,
    }: iCadCliente) {
        const clientesRep = getCustomRepository(ClientesRep);

        const verCad = await clientesRep.findOne({
            opt_doc1,
        });

        if (verCad) {
            throw new Error("CPF / CNPJ já incluido no cadastro");
        }

        const _cliente = await clientesRep.create({
            opt_nome_cliente,
            opt_endereco,
            opt_bairro,
            opt_cep,
            opt_cidade,
            opt_uf,
            opt_doc1,
            opt_doc2,
            opt_cardapio_digital,
            opt_uid_cli,
        });

        await clientesRep.save(_cliente);

        const ClienteCad = await clientesRep.findOne({
            opt_nome_cliente,
            opt_doc1,
        });

        return ClienteCad;
    }
}

export { ServiceCriaCliente };
