import { getCustomRepository, Not } from "typeorm";
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
}

class ServiceAtualizaCliente {
    async execute({
        opt_cod_cliente,
        opt_nome_cliente,
        opt_endereco,
        opt_bairro,
        opt_cep,
        opt_cidade,
        opt_uf,
        opt_doc1,
        opt_doc2,
        opt_cardapio_digital,
    }: iCadCliente) {
        const clientesRep = getCustomRepository(ClientesRep);
        if (opt_doc1 != ""){
            const verCad = await clientesRep.findOne({
                opt_doc1,
                opt_cod_cliente: Not(opt_cod_cliente)
            });
            if (verCad) {
                throw new Error("CPF / CNPJ já incluido no cadastro");
            }
        }

        const _cliente = await clientesRep.update(
            { opt_cod_cliente: opt_cod_cliente },
            {
                opt_cod_cliente,
                opt_nome_cliente,
                opt_endereco,
                opt_bairro,
                opt_cep,
                opt_cidade,
                opt_uf,
                opt_doc1,
                opt_doc2,
                opt_cardapio_digital,
            }
        );

        return {
            opt_cod_cliente,
            opt_nome_cliente,
            opt_endereco,
            opt_bairro,
            opt_cep,
            opt_cidade,
            opt_uf,
            opt_doc1,
            opt_doc2,
            opt_cardapio_digital,
        };
    }
}

export { ServiceAtualizaCliente };
