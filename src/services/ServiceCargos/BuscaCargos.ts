import { getCustomRepository } from "typeorm";
import { CargosRep } from "../../repositories/CargosRep";

class ServiceConsultaCargos {
    async execute() {
        const cargosRep = getCustomRepository(CargosRep);

        const Cargos = await cargosRep.find({order:{opt_cargo: "ASC"}});

        return Cargos;
    }
}

export { ServiceConsultaCargos };
