import { getCustomRepository } from "typeorm";
import { SetorRep } from "../../repositories/SetoresRep";

class consultaSetor {
    async execute() {
        const setorRep = getCustomRepository(SetorRep);

        const Setor = await setorRep.find();

        return Setor;
    }
}

export { consultaSetor };
