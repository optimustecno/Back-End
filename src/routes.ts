import { Request, Response, Router } from "express";
import { Autoriza } from "./middlewares/AutorizaPost";
import { AutUaiRango } from "./middlewares/AutorizaUaiRango";
import { ControleConsApp } from "./Controller/ControleConsApp";
import { VerificaUsuario } from "./middlewares/VerificaUsuario";
import { ControleConsSis } from "./Controller/ControleSistemas";
import { ControleConsCli } from "./Controller/ControleClientes";
import { ControleTeste } from "./Controller/ControleTesteEndPoint";
import { ControleConsCliente } from "./Controller/ControleCliente";
import { ControleBancoOn } from "./Controller/ControleBuscaBancoOn";
import { ControleGeraSenha } from "./Controller/ControleBuscaSenha";
import { BuscaPedidosAccon } from "./middlewares/BuscaPedidosAccon";
import { ControleCredWabiz } from "./Controller/ControleBuscaWabiz";
import { ControleConsPedido } from "./Controller/ControleConsPedido";
import { ControleInformaWabiz } from "./Controller/ControleInfoWabiz";
import { ControleCriaCliente } from "./Controller/ControleCriaCliente";
import { ControleAutenticao } from "./Controller/ControleAutenticacao";
import { ControleCancelaCli } from "./Controller/ControleCancelamento";
import { ControleInsertUsuario } from "./Controller/ControleInsUsuario";
import { ControleMudancaStatus } from "./Controller/ControleMudaStatus";
import { ControleUpdateStatus } from "./Controller/ControleUpdateStatus";
import { BuscaPedidosUaiRango } from "./middlewares/BuscaPedidosUaiRango";
import { ControleInsertManual } from "./Controller/ControlePedidoOptimus";
import { ControleUpdateLicenca } from "./Controller/ControleUpdateLicenca";
import { ControleUpdateCliente } from "./Controller/ControleUpdateCliente";
import { ControleUpdateBancoOn } from "./Controller/ControleAtualizaBancoOn";
import { ControleConsOcorrencia } from "./Controller/ControleConsOcorrencia";
import { ControleTodasConsOcorrencias } from "./Controller/ControleConsTodasOcorrencias";

const Rotas = Router();

const controleTeste = new ControleTeste();
const consultaApps = new ControleConsApp();
const buscaSenha = new ControleGeraSenha();
const buscaWabiz = new ControleCredWabiz();
const buscaBancoOn = new ControleBancoOn();
const cancelaCli = new ControleCancelaCli();
const criaCliente = new ControleCriaCliente();
const buscaCliente = new ControleConsCliente();
const consultaClientes = new ControleConsCli();
const updateWabiz = new ControleInformaWabiz();
const consultaSistemas = new ControleConsSis();
const updateStatus = new ControleUpdateStatus();
const consultaPedidos = new ControleConsPedido();
const updateCliente = new ControleUpdateCliente();
const updateBancoOn = new ControleUpdateBancoOn();
const insereUsuario = new ControleInsertUsuario();
const autenticaUsuario = new ControleAutenticao();
const atualizaLicenca = new ControleUpdateLicenca();
const consultaOcorrencia = new ControleConsOcorrencia();
const pedidoUaiRangoManual = new ControleInsertManual();
const consultaProximoStatus = new ControleMudancaStatus();
const consultaTodasOcorrencias = new ControleTodasConsOcorrencias();

//GET
Rotas.get("/Teste", controleTeste.handle);
Rotas.get("/ConsApp", VerificaUsuario, consultaApps.handle);
Rotas.get("/Sistemas", VerificaUsuario, consultaSistemas.handle);
Rotas.get("/Cliente/:codigo", VerificaUsuario, buscaCliente.handle);
Rotas.get("/SenhaCliente/:codigo", VerificaUsuario, buscaSenha.handle);
Rotas.get("/ConsultaClientes", VerificaUsuario, consultaClientes.handle);
Rotas.get("/CredenciaisWabiz/:codigo", VerificaUsuario, buscaWabiz.handle);
Rotas.get("/BancoOn/:codigo", VerificaUsuario, buscaBancoOn.handle);
Rotas.get("/Ocorrencias", VerificaUsuario, consultaTodasOcorrencias.handle);
Rotas.get("/Ocorrencias/:codigo", VerificaUsuario, consultaOcorrencia.handle);
Rotas.get(
    "/PedidosPendentes/:codigo",
    VerificaUsuario,
    Autoriza,
    BuscaPedidosAccon,
    consultaPedidos.handle
);
//POST
Rotas.post("/Login", autenticaUsuario.handle);
Rotas.post("/ContaRequest", VerificaUsuario, Autoriza);
Rotas.post("/PedidosUaiRango", AutUaiRango, BuscaPedidosUaiRango);
Rotas.post("/Cliente", VerificaUsuario, Autoriza, criaCliente.handle);
Rotas.post("/InsUsuario", VerificaUsuario, Autoriza, insereUsuario.handle);
Rotas.post("/UpdateStatus", VerificaUsuario, Autoriza, updateStatus.handle);
Rotas.post(
    "/ProxStatus",
    VerificaUsuario,
    Autoriza,
    consultaProximoStatus.handle
);
Rotas.post(
    "/InsPedidoOptimus",
    VerificaUsuario,
    Autoriza,
    pedidoUaiRangoManual.handle
);
//PUT
Rotas.put("/Cliente", VerificaUsuario, Autoriza, updateCliente.handle);
Rotas.put("/CancelaCliente", VerificaUsuario, Autoriza, cancelaCli.handle);
Rotas.put("/AtualizaWabiz", VerificaUsuario, Autoriza, updateWabiz.handle);
Rotas.put("/DadosBancoOn", VerificaUsuario, Autoriza, updateBancoOn.handle);
Rotas.put("/UpdateLicenca", VerificaUsuario, Autoriza, atualizaLicenca.handle);

//
export { Rotas };
