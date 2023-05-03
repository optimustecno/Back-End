import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../repositories/ClienteRep";

interface iCliente {
    opt_cod_cliente: string;
}

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
}

interface iLincenca {
    opt_cod_cliente: string;
    opt_bloqueado: string;
    opt_mensagem_licenca: string;
}

interface iAcessoEmpresas {
    opt_cod_cliente: string;
    opt_dns: string;
    opt_banco: string;
    opt_user: string;
    opt_password: string;
    opt_odbc: string;
}

interface iCancelamento {
    opt_cod_cliente: string;
    data_cancelamento: string;
}

interface iCredWabiz {
    opt_cod_cliente: string;
    opt_login_wabiz: string;
    opt_acesso_wabiz: string;
}

class ServiceConsultaCliente {
    async execute({ opt_cod_cliente }: iCliente) {
        const clientesRep = getCustomRepository(ClientesRep);
        const ClientesCad = await clientesRep.findOne({
            opt_cod_cliente,
        });

        if (!ClientesCad) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        return ClientesCad;
    }
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
    }: iCadCliente) {
        const clientesRep = getCustomRepository(ClientesRep);
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
        };
    }
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
    }: iCadCliente) {
        const clientesRep = getCustomRepository(ClientesRep);

        const verCad = await clientesRep.findOne({
            opt_doc1,
        });

        if (verCad) {
            throw new console.error("CPF / CNPJ já incluido no cadastro");
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
        });

        await clientesRep.save(_cliente);

        const ClienteCad = await clientesRep.findOne({
            opt_nome_cliente,
            opt_doc1,
        });

        return ClienteCad;
    }
}

class ServiceAtualizaLicenca {
    async execute({
        opt_cod_cliente,
        opt_bloqueado,
        opt_mensagem_licenca,
    }: iLincenca) {
        const clientesRep = getCustomRepository(ClientesRep);

        if (!opt_cod_cliente) {
            throw new console.error("Código do Cliente Não Informado");
        }

        const _cliente = await clientesRep.update(
            { opt_cod_cliente: opt_cod_cliente },
            {
                opt_bloqueado,
                opt_mensagem_licenca,
            }
        );

        return {
            opt_bloqueado,
            opt_mensagem_licenca,
        };
    }
}

class ServiceCancelaCli {
    async execute({ opt_cod_cliente, data_cancelamento }: iCancelamento) {
        const clientesRep = getCustomRepository(ClientesRep);

        if (!opt_cod_cliente) {
            throw new console.error("Código do Cliente Não Informado");
        }

        const _cliente = await clientesRep.update(
            { opt_cod_cliente: opt_cod_cliente },
            {
                data_cancelamento,
            }
        );

        if (data_cancelamento === "0000-00-00") {
            return {
                message: "Cliente Reativado",
            };
        } else {
            return {
                message: "Cliente Cancelado",
            };
        }
    }
}

class ServiceInformaBancoOn {
    async execute({
        opt_cod_cliente,
        opt_dns,
        opt_banco,
        opt_user,
        opt_password,
        opt_odbc,
    }: iAcessoEmpresas) {
        const clientesRep = getCustomRepository(ClientesRep);

        if (!opt_cod_cliente) {
            throw new console.error("Código do Cliente Não Informado");
        }

        const _cliente = await clientesRep.update(
            { opt_cod_cliente: opt_cod_cliente },
            {
                opt_dns,
                opt_banco,
                opt_user,
                opt_password,
                opt_odbc,
            }
        );
        return {
            message: "Dados Atualizados",
        };
    }
}

class ServiceCredenciaisWabiz {
    async execute({
        opt_cod_cliente,
        opt_login_wabiz,
        opt_acesso_wabiz,
    }: iCredWabiz) {
        const clientesRep = getCustomRepository(ClientesRep);

        if (!opt_cod_cliente) {
            throw new console.error("Código do Cliente Não Informado");
        }

        const _cliente = await clientesRep.update(
            { opt_cod_cliente: opt_cod_cliente },
            {
                opt_login_wabiz,
                opt_acesso_wabiz,
            }
        );
        return {
            message: "Dados Atualizados",
        };
    }
}

class ServiceWabizCliente {
    async execute({ opt_cod_cliente }: iCliente) {
        const clientesRep = getCustomRepository(ClientesRep);
        const ClientesCad = await clientesRep.findOne({
            opt_cod_cliente,
        });

        if (!ClientesCad) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        const { opt_login_wabiz, opt_acesso_wabiz } = ClientesCad;

        return { opt_login_wabiz, opt_acesso_wabiz };
    }
}
class ServiceBancoOn {
    async execute({ opt_cod_cliente }: iCliente) {
        const clientesRep = getCustomRepository(ClientesRep);
        const ClientesCad = await clientesRep.findOne({
            opt_cod_cliente,
        });

        if (!ClientesCad) {
            throw new Error("Nenhum Registro Encontrado!");
        }

        const { opt_dns, opt_banco, opt_user, opt_password, opt_odbc } =
            ClientesCad;

        return { opt_dns, opt_banco, opt_user, opt_password, opt_odbc };
    }
}

export {
    ServiceConsultaCliente,
    ServiceAtualizaCliente,
    ServiceCriaCliente,
    ServiceAtualizaLicenca,
    ServiceCancelaCli,
    ServiceInformaBancoOn,
    ServiceCredenciaisWabiz,
    ServiceWabizCliente,
    ServiceBancoOn,
};
