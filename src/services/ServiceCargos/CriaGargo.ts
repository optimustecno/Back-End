import { getCustomRepository } from "typeorm";
import { CargosRep } from "../../repositories/CargosRep";

interface iCargo {
    seq?: string;
    opt_cargo?: string;
}

class ServiceCriaCargo {
    async execute({ opt_cargo }: iCargo) {
        const cargoRep = getCustomRepository(CargosRep);

        if (!opt_cargo) {
            throw new Error("Não Foi Informado o Nome do Cargo!");
        }

        const TestaCad = await cargoRep.findOne({
            opt_cargo,
        });

        if (TestaCad) {
            throw new Error("Cargo Existente!");
        }

        const _cargo = await cargoRep.create({
            opt_cargo,
        });

        await cargoRep.save(_cargo);

        const CargoCad = await cargoRep.findOne({
            opt_cargo,
        });

        return CargoCad;
    }
}

export { ServiceCriaCargo };
