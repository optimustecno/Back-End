import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../repositories/ClienteRep";
import { UserSuporteRep } from "../repositories/UsuarioSuporteRep"

interface iCliente {
    opt_cod_cliente: string;
}

class ServiceGeraSenha {
    async execute({ opt_cod_cliente }: iCliente) {
        const clientesRep = getCustomRepository(ClientesRep);
        const userRep = getCustomRepository(UserSuporteRep);

        const ClientesCad = await clientesRep.findOne({
            opt_cod_cliente,
        });

        if (!ClientesCad) {
            throw new Error("Nenhum Registro Encontrado!");
        }
        // Analisa o codigo cliente
        var iLen = 0;
        var cCod = ClientesCad.opt_cod_cliente;
        var nCod = 0;
        iLen = String(cCod).length;
        while (iLen > 1) {
            for (var i = 0; i < String(cCod).length; i++) {
                nCod = nCod + Number(String(cCod).charAt(i));
            }
            cCod = String(nCod);
            nCod = 0;
            iLen = String(cCod).length;
        }
        //Analiza Versão
        var cVer = ClientesCad.opt_versao;
        if (!cVer){
            cVer = ClientesCad.opt_versao_adm;
        }
        var aVer = cVer.split(".");
        var nVer = 0;
        aVer.forEach((item) => {
            nVer = nVer + Number(item);
        });
        //Analiza data
        var Data = new Date();
        var dia = String(Data.getDate()).padStart(2, "0");
        var mes = String(Data.getMonth() + 1).padStart(2, "0");
        //
        var nSenha = Number(dia) * 24 + Number(mes) * 12 + nVer;
        //
        var cSenha = `00${nSenha}`;
        iLen = String(cSenha).length;
        cSenha = `${cCod}${cSenha.substring(iLen, iLen - 3)}`;
        //
        const userSup = await userRep.findOne({
            opt_cod_cliente,
        });
        var cPrimPart;
        if (!userSup){
            cPrimPart = ""
        }
        else{
            cPrimPart = userSup.cod_funcionario
        }
        
        return cPrimPart + cSenha;
    }
}

export { ServiceGeraSenha };
