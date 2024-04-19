import { getCustomRepository } from "typeorm";
import { RequestClientesRep } from "../../repositories/RequestClientesRep";

interface iRequests {
    opt_cod_cliente: string;
    data: string;
    quantidade: Number;
}

class ServiceAtualizaRequests {
    async execute({ opt_cod_cliente, data, quantidade }: iRequests) {
        const requestClientesRep = getCustomRepository(RequestClientesRep);

        const atualizaNovoStatus = await requestClientesRep.update(
            { opt_cod_cliente, data },
            { quantidade: () => `quantidade + ${quantidade}` }
        );

        return {
            opt_cod_cliente,
        };
    }
}

export { ServiceAtualizaRequests };
