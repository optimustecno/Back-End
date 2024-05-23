import { createConnection } from "typeorm";
import { ViewSuporteRep } from "../../repositories/ViewSuporteRep"

class ServiceTesteEstatistica {
    async execute(){

        createConnection(/*...*/).then(async connection => {
            /*...*/
            let suporte = await connection
                    .getRepository(ViewSuporteRep)
                    .createQueryBuilder("opt_view_suporte")
                    .getMany();
            return suporte;
        }).catch(error => console.log(error));
    }
}

export { ServiceTesteEstatistica };
