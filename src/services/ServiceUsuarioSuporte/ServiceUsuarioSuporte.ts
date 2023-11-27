
import { UserSuporteRep } from "../../repositories/UsuarioSuporteRep";

interface iUser {
    opt_cod_cliente: string;
    cod_funcionario: string;
}
class ServiceCriaUsuarioSuporte {
    async execute({ opt_cod_cliente, cod_funcionario }: iUser) {
        
        const usrSupRep = UserSuporteRep;

        const verUsr = await usrSupRep.findOne({
            where:{opt_cod_cliente}
        });

        if (verUsr) {
            throw new Error("Já existe Um Usuario de Suporte Cadastrado");
        }
        const _userSuporte = await usrSupRep.create({
            opt_cod_cliente,
            cod_funcionario
        });

        await usrSupRep.save(_userSuporte);

        const usrCriado = await usrSupRep.findOne({
            where:{opt_cod_cliente}
        });

        return usrCriado;
    }
}

export { ServiceCriaUsuarioSuporte };
