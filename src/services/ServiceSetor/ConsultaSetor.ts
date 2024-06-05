import { getCustomRepository } from "typeorm";
import { ViewSetoresRep } from "../../repositories/ViewSetoresRep";

class consultaSetor {
    async execute() {
        const setorRep = getCustomRepository(ViewSetoresRep);

        const Setor = await setorRep.find();

        return Setor;
    }
}

export { consultaSetor };
