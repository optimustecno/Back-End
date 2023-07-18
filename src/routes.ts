import { Request, Response, Router } from "express";
import { Autoriza } from "./middlewares/AutorizaPost";
import { AutUaiRango } from "./middlewares/AutorizaUaiRango";
import { ControleConsApp } from "./Controller/ControleConsApp";
import { VerificaUsuario } from "./middlewares/VerificaUsuario";
import { ControleConsSis } from "./Controller/ControleSistemas";
import { ControleConsCli } from "./Controller/ControleClientes";
import { ControleCriaSetor } from "./Controller/ControleCriaSetor";
import { ControleTeste } from "./Controller/ControleTesteEndPoint";
import { ControleConsCliente } from "./Controller/ControleCliente";
import { ControleConsSuporte } from "./Controller/ControleSuportes";
import { ControleBancoOn } from "./Controller/ControleBuscaBancoOn";
import { ControleGeraSenha } from "./Controller/ControleBuscaSenha";
import { BuscaPedidosAccon } from "./middlewares/BuscaPedidosAccon";
import { ControleCredWabiz } from "./Controller/ControleBuscaWabiz";
import { ControleConsPedido } from "./Controller/ControleConsPedido";
import { ControleTrocaSenha } from "./Controller/ControleTrocaSenha";
import { ControleInformaWabiz } from "./Controller/ControleInfoWabiz";
import { ControleCriaSuporte } from "./Controller/ControleCriaSuporte";
import { ControleConsultaSuporte } from "./Controller/ControleSuporte";
import { ControleCriaCliente } from "./Controller/ControleCriaCliente";
import { ControleAutenticao } from "./Controller/ControleAutenticacao";
import { ControleCancelaCli } from "./Controller/ControleCancelamento";
import { ControleInsertUsuario } from "./Controller/ControleInsUsuario";
import { ControleMudancaStatus } from "./Controller/ControleMudaStatus";
import { ControleBuscaUsuario } from "./Controller/ControleBuscaUsuario";
import { ControleBuscaSetores } from "./Controller/ControleBuscaSetores";
import { ControleUpdateUsu } from "./Controller/ControleAtualizaUsuario";
import { ControleUpdateSetor } from "./Controller/ControleAtualizaSetor";
import { ControleCriaContrato } from "./Controller/ControleCriaContrato";
import { ControleUpdateStatus } from "./Controller/ControleUpdateStatus";
import { ControleConsContrato } from "./Controller/ControleConsContrato";
import { DefineUsuarioSuporte } from "./middlewares/DefineUsuarioSuporte";
import { BuscaPedidosUaiRango } from "./middlewares/BuscaPedidosUaiRango";
import { ControleInsertManual } from "./Controller/ControlePedidoOptimus";
import { ControleBuscaUsuarios } from "./Controller/ControleBuscaUsuarios";
import { ControleDeleteSuporte } from "./Controller/ControleDeleteSuporte";
import { ControleUpdateLicenca } from "./Controller/ControleUpdateLicenca";
import { ControleUpdateCliente } from "./Controller/ControleUpdateCliente";
import { ControleCriaOcorrencia } from "./Controller/ControleCriaOcorrencia";
import { ControleUpdateSuporte } from "./Controller/ControleAtualizaSuporte";
import { ControleUpdateBancoOn } from "./Controller/ControleAtualizaBancoOn";
import { ControleConsOcorrencia } from "./Controller/ControleConsOcorrencia";
import { ControleCancelaContrato } from "./Controller/ControleCancelaContrato";
import { ControleConsContratosCli } from "./Controller/ControleConsContratoCli";
import { ControleAtualizaContrato } from "./Controller/ControleAtualizaContrato";
import { ControleTodasConsOcorrencias } from "./Controller/ControleConsTodasOcorrencias";
import { ControleUpdateClienteViaFood } from "./Controller/ControleUpdateClienteViaFood";
import { ControleBuscaEmpresasLinkadas } from "./Controller/ControleBuscaEmpresasLinkadas";

const Rotas = Router();

const criaSetor = new ControleCriaSetor();
const controleTeste = new ControleTeste();
const updateUsu = new ControleUpdateUsu();
const consultaApps = new ControleConsApp();
const buscaSenha = new ControleGeraSenha();
const buscaWabiz = new ControleCredWabiz();
const buscaBancoOn = new ControleBancoOn();
const cancelaCli = new ControleCancelaCli();
const trocaSenha = new ControleTrocaSenha();
const criaSuporte = new ControleCriaSuporte();
const criaCliente = new ControleCriaCliente();
const updateSetor = new ControleUpdateSetor();
const buscaCliente = new ControleConsCliente();
const consultaClientes = new ControleConsCli();
const updateWabiz = new ControleInformaWabiz();
const consultaSistemas = new ControleConsSis();
const updateStatus = new ControleUpdateStatus();
const buscaSetores = new ControleBuscaSetores();
const buscaUsuario = new ControleBuscaUsuario();
const consContrato = new ControleConsContrato();
const criaContrato = new ControleCriaContrato();
const consultaPedidos = new ControleConsPedido();
const buscaUsuarios = new ControleBuscaUsuarios();
const deleteSuporte = new ControleDeleteSuporte();
const updateCliente = new ControleUpdateCliente();
const updateBancoOn = new ControleUpdateBancoOn();
const insereUsuario = new ControleInsertUsuario();
const updateSuporte = new ControleUpdateSuporte();
const autenticaUsuario = new ControleAutenticao();
const consultaSuportes = new ControleConsSuporte();
const buscaSuporte = new ControleConsultaSuporte();
const criaOcorrencia = new ControleCriaOcorrencia();
const atualizaLicenca = new ControleUpdateLicenca();
const cancelaContrato = new ControleCancelaContrato();
const contratosCliente = new ControleConsContratosCli();
const atualizaContrato = new ControleAtualizaContrato();
const consultaOcorrencia = new ControleConsOcorrencia();
const pedidoUaiRangoManual = new ControleInsertManual();
const consultaProximoStatus = new ControleMudancaStatus();
const atualizaDadosViaFood = new ControleUpdateClienteViaFood();
const buscaEmpresasLinkadas = new ControleBuscaEmpresasLinkadas();
const consultaTodasOcorrencias = new ControleTodasConsOcorrencias();

//GET
//buscaUsuarios;
Rotas.get("/Teste", controleTeste.handle);
Rotas.get("/Setores", VerificaUsuario, buscaSetores.handle);
Rotas.get("/ConsApp", VerificaUsuario, consultaApps.handle);
Rotas.get("/Usuarios", VerificaUsuario, buscaUsuarios.handle);
Rotas.get("/Sistemas", VerificaUsuario, consultaSistemas.handle);
Rotas.get("/Suportes", VerificaUsuario, consultaSuportes.handle);
Rotas.get("/Contrato/:seq", VerificaUsuario, consContrato.handle);
Rotas.get("/BancoOn/:codigo", VerificaUsuario, buscaBancoOn.handle);
Rotas.get("/Cliente/:codigo", VerificaUsuario, buscaCliente.handle);
Rotas.get("/Usuarios/:codigo", VerificaUsuario, buscaUsuario.handle);
Rotas.get("/SenhaCliente/:codigo", VerificaUsuario, buscaSenha.handle);
Rotas.get("/ConsultaClientes", VerificaUsuario, consultaClientes.handle);
Rotas.get("/CredenciaisWabiz/:codigo", VerificaUsuario, buscaWabiz.handle);
Rotas.get("/Ocorrencias", VerificaUsuario, consultaTodasOcorrencias.handle);
Rotas.get("/Ocorrencias/:codigo", VerificaUsuario, consultaOcorrencia.handle);
Rotas.get(
    "/ContratosCli/:opt_cod_cliente",
    VerificaUsuario,
    contratosCliente.handle
);
Rotas.get(
    "/EmpLinkadas/:codigo",
    VerificaUsuario,
    buscaEmpresasLinkadas.handle
);
Rotas.get(
    "/Suporte/:seq",
    VerificaUsuario,
    DefineUsuarioSuporte,
    buscaSuporte.handle
);
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
Rotas.post("/Cliente", VerificaUsuario, criaCliente.handle);
Rotas.post("/Suporte", VerificaUsuario, criaSuporte.handle);
Rotas.post("/PedidosUaiRango", AutUaiRango, BuscaPedidosUaiRango);
Rotas.post("/Setor", VerificaUsuario, Autoriza, criaSetor.handle);
Rotas.post("/Contrato", VerificaUsuario, Autoriza, criaContrato.handle);
Rotas.post("/InsUsuario", VerificaUsuario, Autoriza, insereUsuario.handle);
Rotas.post("/UpdateStatus", VerificaUsuario, Autoriza, updateStatus.handle);
Rotas.post("/NovaOcorrencia", VerificaUsuario, Autoriza, criaOcorrencia.handle);
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
Rotas.put("/Setor", VerificaUsuario, updateSetor.handle);
Rotas.put("/TrocaSenha", VerificaUsuario, trocaSenha.handle);
Rotas.put("/Suporte", VerificaUsuario, updateSuporte.handle);
Rotas.put("/Cliente", VerificaUsuario, updateCliente.handle);
Rotas.put("/AtualizaWabiz", VerificaUsuario, updateWabiz.handle);
Rotas.put("/AtualizaUsuario", VerificaUsuario, updateUsu.handle);
Rotas.put("/DadosBancoOn", VerificaUsuario, updateBancoOn.handle);
Rotas.put("/UpdateLicenca", VerificaUsuario, atualizaLicenca.handle);
Rotas.put("/ClienteFood", VerificaUsuario, atualizaDadosViaFood.handle);
Rotas.put("/CancelaCliente", VerificaUsuario, Autoriza, cancelaCli.handle);
Rotas.put("/Contrato", VerificaUsuario, Autoriza, atualizaContrato.handle);
Rotas.put(
    "/CancelaContrato",
    VerificaUsuario,
    Autoriza,
    cancelaContrato.handle
);
Rotas.put(
    "/AtualizaCli",
    VerificaUsuario,
    Autoriza,
    atualizaDadosViaFood.handle
);
//DELETE
Rotas.delete("/Suporte/:seq", VerificaUsuario, Autoriza, deleteSuporte.handle);
//
export { Rotas };
