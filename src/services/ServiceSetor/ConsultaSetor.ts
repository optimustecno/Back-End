
import { SetorRep } from "../../repositories/SetoresRep";

class consultaSetor {
    async execute() {
        const setorRep = SetorRep;

        const Setor = await setorRep.find();

        return Setor;
    }
}

export { consultaSetor };
