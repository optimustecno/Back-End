import { Router } from "express";
// MIDDLEWARES
import { Autoriza } from "./middlewares/AutorizaPost";
import { VerificaDev } from "./middlewares/VerificaDev";
import { VerificaSite } from "./middlewares/VerificaSite";
import { AutUaiRango } from "./middlewares/AutorizaUaiRango";
import { AutToLevando } from "./middlewares/AutorizaToLevando";
import { VerificaUsuario } from "./middlewares/VerificaUsuario";
import { VerificaVinculo } from "./middlewares/VerificaVinculo";
import { AutorizaConvidado } from "./middlewares/AutorizaConvidado";
import { BuscaPedidosAccon } from "./middlewares/BuscaPedidosAccon";
import { VerificaConvidado } from "./middlewares/VerificaConvidado";
import { DefineUsuarioSuporte } from "./middlewares/DefineUsuarioSuporte";
import { BuscaPedidosUaiRango } from "./middlewares/BuscaPedidosUaiRango";
//CONTROLLERS
import { ControleConsApp } from "./Controller/ControleApp";
import { ControleTeste } from "./Controller/ControleTeste";
import { ControleCriaApp } from "./Controller/ControleApp";
import { ControleBuscaApp } from "./Controller/ControleApp";
import { ControleDeleteApp } from "./Controller/ControleApp";
import { ControleCredWabiz } from "./Controller/ControleApp";
import { ControleListaApps } from "./Controller/ControleApp";
import { ControleUpdateApp } from "./Controller/ControleApp";
import { ControleCriaSetor } from "./Controller/ControleSetor";
import { ControleBancoOn } from "./Controller/ControleCliente";
//
import { ControleLogger } from "./Controller/ControleToLevando";
//
import { ControleInformaWabiz } from "./Controller/ControleApp";
import { ControleCriaCargo } from "./Controller/ControleCargos";
import { ControleConsPedido, ControleFinalizaPedidos } from "./Controller/ControlePedido";
import { ControleListaSis } from "./Controller/ControleSistemas";
import { ControleGeraSenha } from "./Controller/ControleSuporte";
import { ControleUpdateUsu } from "./Controller/ControleUsuario";
import { ControleUpdateSetor } from "./Controller/ControleSetor";
import { ControleBuscaCargos } from "./Controller/ControleCargos";
import { ControleTrocaSenha } from "./Controller/ControleUsuario";
import { ControleUpdateCargo } from "./Controller/ControleCargos";
import { ControleCancelaCli } from "./Controller/ControleCliente";
import { ControleBuscaSetores } from "./Controller/ControleSetor";
import { ControleBuscaPedido, ControleDeleteLog } from "./Controller/ControleLogger";
import { ControleLicencaOff } from "./Controller/ControleCliente";
import { ControleConsCliente } from "./Controller/ControleCliente";
import { ControleCriaCliente } from "./Controller/ControleCliente";
import { ControleCriaSuporte } from "./Controller/ControleSuporte";
import { ControleUpdateStatus } from "./Controller/ControlePedido";
import { ControleInsertManual } from "./Controller/ControlePedido";
import { ControleMudancaStatus } from "./Controller/ControlePedido";
import { ControleBuscaUsuario } from "./Controller/ControleUsuario";
import { ControleListaSuporte } from "./Controller/ControleSuporte";
import { ControleCriaContato } from "./Controller/ControleContatos";
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
import { ControleCriaProdutos } from "./Controller/ControleCardapio";
import { ControleBuscaContato } from "./Controller/ControleContatos";
import {
    ControleAdmListaVinculos,
    ControleAprovaVinculo,
    ControleBuscaWebhook,
    ControleCriaAlteraWebHook,
    ControleCriaVinculo,
    ControleUpdateApiKey,
    ControleVinculoFood,
} from "./Controller/ControleConvidados";
import { ControleCriaMensagem } from "./Controller/ControleMensagens";
import { ControleDeleteContato } from "./Controller/ControleContatos";
import { ControleUpdateContato } from "./Controller/ControleContatos";
import { ControleBuscaProdutos } from "./Controller/ControleCardapio";
import { ControleListaContatos } from "./Controller/ControleContatos";
import { ControleUsuarioSuporte } from "./Controller/ControleUsuario";
import { ControleAutenticao } from "./Controller/ControleAutenticacao";
import { ControleConsultaSuporte } from "./Controller/ControleSuporte";
import { ControleCriaAcesso } from "./Controller/ControleAcessoRemoto";
import { ControleBuscaAcesso } from "./Controller/ControleAcessoRemoto";
import { ControleUpdateMensagem } from "./Controller/ControleMensagens";
import { ControleCancelaContrato } from "./Controller/ControleContrato";
import { ControleListaVinculos } from "./Controller/ControleConvidados";
import { ControleDeleteVinculo } from "./Controller/ControleConvidados";
import { ControleDeleteAcesso } from "./Controller/ControleAcessoRemoto";
import { ControleUpdateAcesso } from "./Controller/ControleAcessoRemoto";
import { ControleAtualizaContrato } from "./Controller/ControleContrato";
import { ControleConsContratosCli } from "./Controller/ControleContrato";
import { ControleConsOcorrencia } from "./Controller/ControleOcorrencia";
import { ControleListaAcessos } from "./Controller/ControleAcessoRemoto";
import { ControleCriaOcorrencia } from "./Controller/ControleOcorrencia";
import { ControleCriaAlteraProduto } from "./Controller/ControleCardapio";
import { ControleCriaPerfilCardapio } from "./Controller/ControleCardapio";
import { ControleBuscaPerfilCardapio } from "./Controller/ControleCardapio";
import { ControleBuscaGruposProdutos } from "./Controller/ControleCardapio";
import { ControleUpdateClienteViaFood } from "./Controller/ControleCliente";
import { ControleBuscaEmpresasLinkadas } from "./Controller/ControleCliente";
import {
    ControleTrocaSenhaConvidado,
    ControleTrocaSenhaConvidadoAdm,
} from "./Controller/ControleConvidados";
import { ControleTodasConsOcorrencias } from "./Controller/ControleOcorrencia";
import { ControleBuscaEmpresasNaoLinkadas } from "./Controller/ControleCliente";
import {
    ControleAutenticaConvidado,
    ControleBuscaConvidado,
    ControleBuscaConvidados,
    ControleCriaConvidado,
    ControleDeleteConvidado,
    ControleLiberaConvidado,
    ControleListaConvidados,
    ControleUpdateConvidado,
} from "./Controller/ControleConvidados";
import { ControleBuscaGruposProdutosDev, ControleBuscaPersonalizacoesDev, ControleBuscaProdutosDev, ControleCriaGrupo, ControleGrupoPersonalizacaoDev, ControleUpdateGrupo } from "./Controller/ControleCardapioDev";

const Rotas = Router();

const criaApp = new ControleCriaApp();
const buscaApp = new ControleBuscaApp();
const criaSetor = new ControleCriaSetor();
const controleTeste = new ControleTeste();
const updateUsu = new ControleUpdateUsu();
const criaCargo = new ControleCriaCargo();
const listaApps = new ControleListaApps();
const deleteApp = new ControleDeleteApp();
const deletaLog = new ControleDeleteLog();
const consultaApps = new ControleConsApp();
const buscaSenha = new ControleGeraSenha();
const buscaWabiz = new ControleCredWabiz();
const buscaBancoOn = new ControleBancoOn();
const BuscaJson = new ControleBuscaPedido();
const cancelaCli = new ControleCancelaCli();
const trocaSenha = new ControleTrocaSenha();
const criaAcesso = new ControleCriaAcesso();
const atualizaApp = new ControleUpdateApp();
const novaApiKey = new ControleUpdateApiKey();
const criaVinculo = new ControleCriaVinculo();
const criaSuporte = new ControleCriaSuporte();
const criaCliente = new ControleCriaCliente();
const updateSetor = new ControleUpdateSetor();
const updateCargo = new ControleUpdateCargo();
const updateGrupo = new ControleUpdateGrupo();
const buscaCliente = new ControleConsCliente();
const updateWabiz = new ControleInformaWabiz();
const consultaSistemas = new ControleListaSis();
const updateStatus = new ControleUpdateStatus();
const buscaSetores = new ControleBuscaSetores();
const buscaUsuario = new ControleBuscaUsuario();
const consContrato = new ControleConsContrato();
const criaContrato = new ControleCriaContrato();
const consultaPedidos = new ControleConsPedido();
//
const loggerToLevando = new ControleLogger();
//
const licencaOff = new ControleLicencaOff();
const criaContato = new ControleCriaContato();
const buscaCargos = new ControleBuscaCargos();
const buscaAcesso = new ControleBuscaAcesso();
const vinculoFood = new ControleVinculoFood();
const buscaContato = new ControleBuscaContato();
const deleteAcesso = new ControleDeleteAcesso();
const updateAcesso = new ControleUpdateAcesso();
const criaMensagem = new ControleCriaMensagem();
const listaAcessos = new ControleListaAcessos();
const deleteContao = new ControleDeleteContato();
const listaVinculos = new ControleListaVinculos();
const listaContatos = new ControleListaContatos();
const buscaProdutos = new ControleBuscaProdutos();
const buscaUsuarios = new ControleListaUsuarios();
const deleteSuporte = new ControleDeleteSuporte();
const updateCliente = new ControleUpdateCliente();
const updateBancoOn = new ControleUpdateBancoOn();
const insereUsuario = new ControleInsertUsuario();
const updateSuporte = new ControleUpdateSuporte();
const autenticaUsuario = new ControleAutenticao();
const updateContato = new ControleUpdateContato();
const produtosDev = new ControleBuscaProdutosDev();
const buscaSuporte = new ControleConsultaSuporte();
//
const insereConvidado = new ControleCriaConvidado();
const buscaConvidado = new ControleBuscaConvidado();
const listaConvidados = new ControleListaConvidados();
const deleteConvidado = new ControleDeleteConvidado();
const updateConvidado = new ControleUpdateConvidado();
const liberaConvidado = new ControleLiberaConvidado();
const buscaAdmConvidado = new ControleBuscaConvidados();
const autenticaConvidado = new ControleAutenticaConvidado();
const trocaSenhaConvidado = new ControleTrocaSenhaConvidado();
const admSenhaConvidado = new ControleTrocaSenhaConvidadoAdm();
//
const gravaGrupos = new ControleCriaGrupo();
const buscaWebhook = new ControleBuscaWebhook();
const removeVinculo = new ControleDeleteVinculo();
const aprovaVinculo = new ControleAprovaVinculo();
const criaUsuSuporte = new ControleUsuarioSuporte();
const updateMensagem = new ControleUpdateMensagem();
const consultaSuportes = new ControleListaSuporte();
const criaOcorrencia = new ControleCriaOcorrencia();
const atualizaLicenca = new ControleUpdateLicenca();
const consultaClientes = new ControleListaClientes();
const finalizaPedidos = new ControleFinalizaPedidos();
const buscaGrupos = new ControleBuscaGruposProdutos();
const cancelaContrato = new ControleCancelaContrato();
const criaAlteraProdutos = new ControleCriaProdutos();
const contratosCliente = new ControleConsContratosCli();
const atualizaContrato = new ControleAtualizaContrato();
const consultaOcorrencia = new ControleConsOcorrencia();
const pedidoUaiRangoManual = new ControleInsertManual();
const listaAdmVinculos = new ControleAdmListaVinculos();
const criaAlteraProduto = new ControleCriaAlteraProduto();
const consultaProximoStatus = new ControleMudancaStatus();
const grupoProdDev = new ControleBuscaGruposProdutosDev();
const criaAlteraWebhook = new ControleCriaAlteraWebHook();
const criaPerfilCardapio = new ControleCriaPerfilCardapio();
const grupoPersonaDev = new ControleGrupoPersonalizacaoDev();
const buscaPerfilCardapio = new ControleBuscaPerfilCardapio();
const buscaNaoLinkadas = new ControleBuscaEmpresasNaoLinkadas();
const atualizaDadosViaFood = new ControleUpdateClienteViaFood();
const personalizacoesDev = new ControleBuscaPersonalizacoesDev();
const buscaEmpresasLinkadas = new ControleBuscaEmpresasLinkadas();
const consultaTodasOcorrencias = new ControleTodasConsOcorrencias();

//GET
Rotas.get("/Teste", controleTeste.handle);
Rotas.get("/GruposProd/:codigo", buscaGrupos.handle);
Rotas.get("/Apps", VerificaUsuario, listaApps.handle);
Rotas.get("/App/:seq", VerificaUsuario, buscaApp.handle);
Rotas.get("/Cargos", VerificaUsuario, buscaCargos.handle);
Rotas.get("/ConsApp", VerificaUsuario, consultaApps.handle);
Rotas.get("/Setores", VerificaUsuario, buscaSetores.handle);
Rotas.get("/Acessos", VerificaUsuario, listaAcessos.handle);
Rotas.get("/ProdutosCardapio/:codigo", buscaProdutos.handle);
Rotas.get("/Usuarios", VerificaUsuario, buscaUsuarios.handle);
Rotas.get("/Contatos", VerificaUsuario, listaContatos.handle);
Rotas.get("/PerfilCardapio/:codigo", buscaPerfilCardapio.handle);
Rotas.get("/Sistemas", VerificaUsuario, consultaSistemas.handle);
Rotas.get("/Suportes", VerificaUsuario, consultaSuportes.handle);
Rotas.get("/Contrato/:seq", VerificaUsuario, consContrato.handle);
Rotas.get("/Convidados", VerificaUsuario, listaConvidados.handle);
Rotas.get("/BancoOn/:codigo", VerificaUsuario, buscaBancoOn.handle);
Rotas.get("/CadConvidado", VerificaConvidado, buscaConvidado.handle);
///////////////////////////// ROTAS QUE ALTERAM UUID //////////////////////////////////////////////
Rotas.get("/Cliente/:codigo", VerificaUsuario, buscaCliente.handle);
Rotas.get("/Usuarios/:codigo", VerificaUsuario, buscaUsuario.handle);
Rotas.get("/SenhaCliente/:codigo", VerificaUsuario, buscaSenha.handle);
Rotas.get("/AcessosCli/:opt_cod_cli", VerificaUsuario, buscaAcesso.handle);
Rotas.get("/Acesso/:opt_cod_cli/:seq", VerificaUsuario, buscaAcesso.handle);
Rotas.get("/ContatosCli/:opt_cod_cli", VerificaUsuario, buscaContato.handle);
Rotas.get("/Contato/:opt_cod_cli/:seq", VerificaUsuario, buscaContato.handle);
Rotas.get("/Suporte/:seq", VerificaUsuario, DefineUsuarioSuporte, buscaSuporte.handle);
///////////////////////////// FIM ROTAS QUE ALTERAM UUID ///////////////////////////////////////////
Rotas.get("/ConsultaClientes", VerificaUsuario, consultaClientes.handle);
Rotas.get("/BuscaLogJson/:opt_payload", VerificaUsuario, BuscaJson.handle);
Rotas.get("/CredenciaisWabiz/:codigo", VerificaUsuario, buscaWabiz.handle);
Rotas.get("/Ocorrencias", VerificaUsuario, consultaTodasOcorrencias.handle);
Rotas.get("/Vinculo/:codigo", VerificaUsuario, Autoriza, vinculoFood.handle);
Rotas.get("/Ocorrencias/:codigo", VerificaUsuario, consultaOcorrencia.handle);
Rotas.get("/AdmVinculos", VerificaUsuario, Autoriza, listaAdmVinculos.handle);
Rotas.get("/EmpNaoLinkadas/:codigo", VerificaUsuario, buscaNaoLinkadas.handle);
Rotas.get("/EmpLinkadas/:codigo", VerificaUsuario, buscaEmpresasLinkadas.handle);
Rotas.get("/Webhook", VerificaConvidado, AutorizaConvidado, buscaWebhook.handle);
Rotas.get("/Vinculos", VerificaConvidado, AutorizaConvidado, listaVinculos.handle);
// AdmVinculos
Rotas.get("/Convidado/:opt_seq_convidado", VerificaUsuario, buscaAdmConvidado.handle);
Rotas.get("/ContratosCli/:opt_cod_cliente", VerificaUsuario, contratosCliente.handle);
// Rotas para integração com convidados
Rotas.get(
    "/Grupos/:uid_cli",
    VerificaDev,
    AutorizaConvidado,
    VerificaVinculo,
    grupoProdDev.handle
);
Rotas.get(
    "/Produtos/:uid_cli/:cod_grupo",
    VerificaDev,
    AutorizaConvidado,
    VerificaVinculo,
    produtosDev.handle
);
Rotas.get(
    "/GrupoPersonaliza/:uid_cli/:cod_grupo",
    VerificaDev,
    AutorizaConvidado,
    VerificaVinculo,
    grupoPersonaDev.handle
);
Rotas.get(
    "/Personalizacoes/:uid_cli",
    VerificaDev,
    AutorizaConvidado,
    VerificaVinculo,
    personalizacoesDev.handle
);
// 
Rotas.get(
    "/PedidosPendentes/:codigo",
    VerificaUsuario,
    Autoriza,
    BuscaPedidosAccon,
    consultaPedidos.handle
);

//POST
Rotas.post("/Login", autenticaUsuario.handle);
//
Rotas.post("/PedidoToLevando", AutToLevando, loggerToLevando.handle);
//
Rotas.post("/Autentica", autenticaConvidado.handle);
Rotas.post("/ContaRequest", VerificaUsuario, Autoriza);
Rotas.post("/Cargo", VerificaUsuario, criaCargo.handle);
Rotas.post("/Acesso", VerificaUsuario, criaAcesso.handle);
Rotas.post("/Cliente", VerificaUsuario, criaCliente.handle);
Rotas.post("/Suporte", VerificaUsuario, criaSuporte.handle);
Rotas.post("/Contato", VerificaUsuario, criaContato.handle);
Rotas.post("/App", VerificaUsuario, Autoriza, criaApp.handle);
Rotas.post("/Mensagem", VerificaUsuario, criaMensagem.handle);
Rotas.post("/LicencaOff", VerificaUsuario, licencaOff.handle);
Rotas.post("/Convidado", VerificaSite, insereConvidado.handle);
Rotas.post("/PedidosUaiRango", AutUaiRango, BuscaPedidosUaiRango);
Rotas.post("/Setor", VerificaUsuario, Autoriza, criaSetor.handle);
Rotas.post("/Grupos", VerificaUsuario, Autoriza, gravaGrupos.handle);
Rotas.post("/Contrato", VerificaUsuario, Autoriza, criaContrato.handle);
Rotas.post("/InsUsuario", VerificaUsuario, Autoriza, insereUsuario.handle);
Rotas.post("/UpdateStatus", VerificaUsuario, Autoriza, updateStatus.handle);
Rotas.post("/Produto", VerificaUsuario, Autoriza, criaAlteraProduto.handle);
Rotas.post("/Produtos", VerificaUsuario, Autoriza, criaAlteraProdutos.handle);
Rotas.post("/UsuarioSuporte", VerificaUsuario, Autoriza, criaUsuSuporte.handle);
Rotas.post("/NovaOcorrencia", VerificaUsuario, Autoriza, criaOcorrencia.handle);
Rotas.post("/Vinculo", VerificaConvidado, AutorizaConvidado, criaVinculo.handle);
Rotas.post("/PerfilCadapio", VerificaUsuario, Autoriza, criaPerfilCardapio.handle);
Rotas.post("/ProxStatus", VerificaUsuario, Autoriza, consultaProximoStatus.handle);
Rotas.post("/Webhook", VerificaConvidado,AutorizaConvidado, criaAlteraWebhook.handle);
Rotas.post("/InsPedidoOptimus", VerificaUsuario, Autoriza, pedidoUaiRangoManual.handle);
//PUT
Rotas.put("/App", VerificaUsuario, atualizaApp.handle);
Rotas.put("/Setor", VerificaUsuario, updateSetor.handle);
Rotas.put("/Cargo", VerificaUsuario, updateCargo.handle);
Rotas.put("/Acesso", VerificaUsuario, updateAcesso.handle);
Rotas.put("/TrocaSenha", VerificaUsuario, trocaSenha.handle);
Rotas.put("/Suporte", VerificaUsuario, updateSuporte.handle);
Rotas.put("/Cliente", VerificaUsuario, updateCliente.handle);
Rotas.put("/Contato", VerificaUsuario, updateContato.handle);
Rotas.put("/Mensagem", VerificaUsuario, updateMensagem.handle);
Rotas.put("/AtualizaWabiz", VerificaUsuario, updateWabiz.handle);
Rotas.put("/AtualizaUsuario", VerificaUsuario, updateUsu.handle);
Rotas.put("/DadosBancoOn", VerificaUsuario, updateBancoOn.handle);
Rotas.put("/Grupos", VerificaUsuario, Autoriza, updateGrupo.handle);
Rotas.put("/UpdateLicenca", VerificaUsuario, atualizaLicenca.handle);
Rotas.put("/StatusConvidado", VerificaUsuario, liberaConvidado.handle);
Rotas.put("/ClienteFood", VerificaUsuario, atualizaDadosViaFood.handle);
Rotas.put("/CancelaCliente", VerificaUsuario, Autoriza, cancelaCli.handle);
Rotas.put("/Contrato", VerificaUsuario, Autoriza, atualizaContrato.handle);
Rotas.put("/AprovaVinculo", VerificaUsuario, Autoriza, aprovaVinculo.handle);
Rotas.put("/ApiKey", VerificaConvidado, AutorizaConvidado, novaApiKey.handle);
Rotas.put("/CancelaContrato", VerificaUsuario, Autoriza, cancelaContrato.handle);
Rotas.put("/AtualizaCli", VerificaUsuario, Autoriza, atualizaDadosViaFood.handle);
Rotas.put("/AdmSenhaConvidado", VerificaUsuario, Autoriza, admSenhaConvidado.handle);
Rotas.put("/Convidado", VerificaConvidado, AutorizaConvidado, updateConvidado.handle);
Rotas.put("/FinalizaPedidos/:data", VerificaUsuario, Autoriza, finalizaPedidos.handle);
Rotas.put("/SenhaConvidado", VerificaConvidado, AutorizaConvidado, trocaSenhaConvidado.handle);
//DELETE
Rotas.delete("/Acesso/:seq", VerificaUsuario, deleteAcesso.handle);
Rotas.delete("/Contato/:seq", VerificaUsuario, deleteContao.handle);
Rotas.delete("/App/:seq", VerificaUsuario, Autoriza, deleteApp.handle);
Rotas.delete("/Logger/:data", VerificaUsuario, Autoriza, deletaLog.handle);
Rotas.delete("/Suporte/:seq", VerificaUsuario, Autoriza, deleteSuporte.handle);
Rotas.delete("/Convidado/:opt_seq_convidado", VerificaUsuario, Autoriza, deleteConvidado.handle);
Rotas.delete("/Vinculo/:opt_uid_cli", VerificaConvidado, AutorizaConvidado, removeVinculo.handle);
//
export { Rotas };
