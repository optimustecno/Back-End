import { Router } from "express";
// MIDDLEWARES
import { Autoriza } from "./middlewares/AutorizaPost";
import { AutUaiRango } from "./middlewares/AutorizaUaiRango";
import { VerificaUsuario } from "./middlewares/VerificaUsuario";
import { BuscaPedidosAccon } from "./middlewares/BuscaPedidosAccon";
import { DefineUsuarioSuporte } from "./middlewares/DefineUsuarioSuporte";
import { BuscaPedidosUaiRango } from "./middlewares/BuscaPedidosUaiRango";
//CONTROLLERS
import { ControleConsApp } from "./Controller/ControleApp";
import { ControleTeste } from "./Controller/ControleTeste";
import { ControleCredWabiz } from "./Controller/ControleApp";
import { ControleCriaSetor } from "./Controller/ControleSetor";
import { ControleBancoOn } from "./Controller/ControleCliente";
import { ControleInformaWabiz } from "./Controller/ControleApp";
import { ControleConsPedido } from "./Controller/ControlePedido";
import { ControleListaSis } from "./Controller/ControleSistemas";
import { ControleGeraSenha } from "./Controller/ControleSuporte";
import { ControleUpdateUsu } from "./Controller/ControleUsuario";
import { ControleUpdateSetor } from "./Controller/ControleSetor";
import { ControleTrocaSenha } from "./Controller/ControleUsuario";
import { ControleCancelaCli } from "./Controller/ControleCliente";
import { ControleBuscaSetores } from "./Controller/ControleSetor";
import { ControleConsCliente } from "./Controller/ControleCliente";
import { ControleCriaCliente } from "./Controller/ControleCliente";
import { ControleCriaSuporte } from "./Controller/ControleSuporte";
import { ControleUpdateStatus } from "./Controller/ControlePedido";
import { ControleInsertManual } from "./Controller/ControlePedido";
import { ControleMudancaStatus } from "./Controller/ControlePedido";
import { ControleBuscaUsuario } from "./Controller/ControleUsuario";
import { ControleListaSuporte } from "./Controller/ControleSuporte";
import { ControleUpdateLicenca } from "./Controller/ControleCliente";
import { ControleUpdateSuporte } from "./Controller/ControleSuporte";
import { ControleUpdateBancoOn } from "./Controller/ControleCliente";
import { ControleListaClientes } from "./Controller/ControleCliente";
import { ControleInsertUsuario } from "./Controller/ControleUsuario";
import { ControleListaUsuarios } from "./Controller/ControleUsuario";
import { ControleCriaContrato } from "./Controller/ControleContrato";
import { ControleConsContrato } from "./Controller/ControleContrato";
import { ControleDeleteSuporte } from "./Controller/ControleSuporte";
import { ControleUpdateCliente } from "./Controller/ControleCliente";
import { ControleAutenticao } from "./Controller/ControleAutenticacao";
import { ControleConsultaSuporte } from "./Controller/ControleSuporte";
import { ControleCancelaContrato } from "./Controller/ControleContrato";
import { ControleAtualizaContrato } from "./Controller/ControleContrato";
import { ControleConsContratosCli } from "./Controller/ControleContrato";
import { ControleConsOcorrencia } from "./Controller/ControleOcorrencia";
import { ControleCriaOcorrencia } from "./Controller/ControleOcorrencia";
import { ControleCriaPerfilCardapio } from "./Controller/ControleCardapio";
import { ControleBuscaPerfilCardapio } from "./Controller/ControleCardapio";
import { ControleUpdateClienteViaFood } from "./Controller/ControleCliente";
import { ControleBuscaEmpresasLinkadas } from "./Controller/ControleCliente";
import { ControleTodasConsOcorrencias } from "./Controller/ControleOcorrencia";
import { ControleBuscaEmpresasNaoLinkadas } from "./Controller/ControleCliente";
import { ControleUsuarioSuporte } from "./Controller/ControleUsuario/UsuarioSuporte";

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
const updateWabiz = new ControleInformaWabiz();
const consultaSistemas = new ControleListaSis();
const updateStatus = new ControleUpdateStatus();
const buscaSetores = new ControleBuscaSetores();
const buscaUsuario = new ControleBuscaUsuario();
const consContrato = new ControleConsContrato();
const criaContrato = new ControleCriaContrato();
const consultaPedidos = new ControleConsPedido();
const buscaUsuarios = new ControleListaUsuarios();
const deleteSuporte = new ControleDeleteSuporte();
const updateCliente = new ControleUpdateCliente();
const updateBancoOn = new ControleUpdateBancoOn();
const insereUsuario = new ControleInsertUsuario();
const updateSuporte = new ControleUpdateSuporte();
const autenticaUsuario = new ControleAutenticao();
const buscaSuporte = new ControleConsultaSuporte();
const criaUsuSuporte = new ControleUsuarioSuporte();
const consultaSuportes = new ControleListaSuporte();
const criaOcorrencia = new ControleCriaOcorrencia();
const atualizaLicenca = new ControleUpdateLicenca();
const consultaClientes = new ControleListaClientes();
const cancelaContrato = new ControleCancelaContrato();
const contratosCliente = new ControleConsContratosCli();
const atualizaContrato = new ControleAtualizaContrato();
const consultaOcorrencia = new ControleConsOcorrencia();
const pedidoUaiRangoManual = new ControleInsertManual();
const consultaProximoStatus = new ControleMudancaStatus();
const criaPerfilCardapio = new ControleCriaPerfilCardapio();
const buscaPerfilCardapio = new ControleBuscaPerfilCardapio();
const buscaNaoLinkadas = new ControleBuscaEmpresasNaoLinkadas();
const atualizaDadosViaFood = new ControleUpdateClienteViaFood();
const buscaEmpresasLinkadas = new ControleBuscaEmpresasLinkadas();
const consultaTodasOcorrencias = new ControleTodasConsOcorrencias();

//GET
Rotas.get("/Teste", controleTeste.handle);
Rotas.get("/Setores", VerificaUsuario, buscaSetores.handle);
Rotas.get("/ConsApp", VerificaUsuario, consultaApps.handle);
Rotas.get("/Usuarios", VerificaUsuario, buscaUsuarios.handle);
Rotas.get("/Sistemas", VerificaUsuario, consultaSistemas.handle);
Rotas.get("/Suportes", VerificaUsuario, consultaSuportes.handle);
Rotas.get("/Contrato/:seq", VerificaUsuario, consContrato.handle);
Rotas.get("/BancoOn/:codigo", VerificaUsuario, buscaBancoOn.handle);
Rotas.get("/produtos/:codigo", VerificaUsuario);
Rotas.get("/Cliente/:codigo", VerificaUsuario, buscaCliente.handle);
Rotas.get("/Usuarios/:codigo", VerificaUsuario, buscaUsuario.handle);
Rotas.get("/SenhaCliente/:codigo", VerificaUsuario, buscaSenha.handle);
Rotas.get("/ConsultaClientes", VerificaUsuario, consultaClientes.handle);
Rotas.get("/CredenciaisWabiz/:codigo", VerificaUsuario, buscaWabiz.handle);
Rotas.get("/Ocorrencias", VerificaUsuario, consultaTodasOcorrencias.handle);
Rotas.get("/Ocorrencias/:codigo", VerificaUsuario, consultaOcorrencia.handle);
Rotas.get("/EmpNaoLinkadas/:codigo", VerificaUsuario, buscaNaoLinkadas.handle);
Rotas.get("/EmpLinkadas/:codigo", VerificaUsuario, buscaEmpresasLinkadas.handle);
Rotas.get("/PerfilCardapio/:codigo", VerificaUsuario, buscaPerfilCardapio.handle);
Rotas.get("/ContratosCli/:opt_cod_cliente", VerificaUsuario, contratosCliente.handle);
Rotas.get("/Suporte/:seq", VerificaUsuario, DefineUsuarioSuporte, buscaSuporte.handle);
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
Rotas.post("/UsuarioSuporte", VerificaUsuario, Autoriza, criaUsuSuporte.handle);
Rotas.post("/NovaOcorrencia", VerificaUsuario, Autoriza, criaOcorrencia.handle);
Rotas.post("/PerfilCadapio", VerificaUsuario, Autoriza, criaPerfilCardapio.handle);
Rotas.post("/ProxStatus", VerificaUsuario, Autoriza, consultaProximoStatus.handle);
Rotas.post("/InsPedidoOptimus", VerificaUsuario, Autoriza, pedidoUaiRangoManual.handle);
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
Rotas.put("/CancelaContrato", VerificaUsuario, Autoriza, cancelaContrato.handle);
Rotas.put("/AtualizaCli", VerificaUsuario, Autoriza, atualizaDadosViaFood.handle);
//DELETE
Rotas.delete("/Suporte/:seq", VerificaUsuario, Autoriza, deleteSuporte.handle);
//
export { Rotas };
