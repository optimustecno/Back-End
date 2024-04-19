import { getCustomRepository } from "typeorm";
import { RequestClientesRep } from "../../repositories/RequestClientesRep";

interface iRequests {
    opt_cod_cliente: string;
    data: string;
    quantidade: string;
}

class ServiceCriaReqs {
    async execute({ opt_cod_cliente, data, quantidade }: iRequests) {
        
        const reqCliRep = getCustomRepository(RequestClientesRep);

        const _Request = await reqCliRep.create({
            opt_cod_cliente,
            data,
            quantidade: parseInt(quantidade),
        })

        await reqCliRep.save(_Request);

        return _Request

    }
}

export { ServiceCriaReqs };
