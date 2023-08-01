import { getCustomRepository } from "typeorm";
import { SistemasRep } from "../../repositories/SistemasRep";

class ServiceConsultaSistemas {
    async execute() {
        const sisRep = getCustomRepository(SistemasRep);

        const Sistemas = await sisRep.find({
            order: { opt_nome_sistema: "ASC" },
        });

        if (!Sistemas) {
            throw new Error("Nenhum registro a ser exibido!");
        }

        return Sistemas;
    }
}

export { ServiceConsultaSistemas };
