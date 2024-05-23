import { getCustomRepository } from "typeorm";
import { CargosRep } from "../../repositories/CargosRep";

interface iCargo {
    seq?: string;
    opt_cargo?: string;
}

class ServiceAtualizaCargo {
    async execute({ seq, opt_cargo }: iCargo) {
        const cargoRep = getCustomRepository(CargosRep);

        if (!seq) {
            throw new Error("Código do Cargo Não Informado");
        }

        const _cargo = await cargoRep.update(
            { seq },
            {
                opt_cargo,
            }
        );

        return {
            seq,
            opt_cargo,
        };
    }
}

export { ServiceAtualizaCargo };
