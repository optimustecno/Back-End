import { MigrationInterface, QueryRunner } from "typeorm";

export class Cre1700960912606 implements MigrationInterface {
    name = 'Cre1700960912606'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "opt_view_cli_app" ("seq" character varying NOT NULL, "opt_cod_cliente" character varying NOT NULL, "opt_nome_cliente" character varying NOT NULL, "app" character varying NOT NULL, "login" character varying NOT NULL, "senha" character varying NOT NULL, "token" character varying NOT NULL, "rede" character varying NOT NULL, CONSTRAINT "PK_016d9903ce516325ae47db85a50" PRIMARY KEY ("seq"))`);
        await queryRunner.query(`CREATE TABLE "opt_clientes" ("opt_cod_cliente" character varying NOT NULL, "opt_nome_cliente" character varying NOT NULL, "opt_bloqueado" character varying NOT NULL, "opt_nome_sistema" character varying NOT NULL, "opt_versao" character varying NOT NULL, "opt_ultimo_acesso" character varying NOT NULL, "data_cancelamento" character varying NOT NULL, CONSTRAINT "PK_9ccd7aa4d2be73343c4d6662faf" PRIMARY KEY ("opt_cod_cliente"))`);
        await queryRunner.query(`CREATE TABLE "opt_contrato" ("seq" character varying NOT NULL, "opt_cod_cliente" character varying NOT NULL, "data" TIMESTAMP NOT NULL, "vencimento" character varying NOT NULL, "tx_instalacao" integer NOT NULL, "venc_instalacao" TIMESTAMP NOT NULL, "inicio_mens" TIMESTAMP NOT NULL, "valor_mens" integer NOT NULL, "percentual" integer NOT NULL, "base_calculo" integer NOT NULL, "ativo" character varying NOT NULL, "data_cancelamento" character varying NOT NULL, CONSTRAINT "PK_8291efdef4a6a06d6cecc23f691" PRIMARY KEY ("seq"))`);
        await queryRunner.query(`CREATE TABLE "opt_view_dados_on" ("opt_cod_cliente" character varying NOT NULL, "opt_nome_cliente" character varying NOT NULL, "cod_link" character varying NOT NULL, "nome_link" character varying NOT NULL, CONSTRAINT "PK_21989fe5bdd5146729f37d0e76c" PRIMARY KEY ("cod_link"))`);
        await queryRunner.query(`CREATE TABLE "opt_permissoes" ("seq" character varying NOT NULL, "permissao" character varying NOT NULL, CONSTRAINT "PK_9077ccd88ebdd6189ae94662abc" PRIMARY KEY ("seq"))`);
        await queryRunner.query(`CREATE TABLE "opt_financeiro" ("seq" character varying NOT NULL, "opt_seq_contrato" character varying NOT NULL, "opt_cod_cliente" character varying NOT NULL, "vencimento" TIMESTAMP NOT NULL, "valor" integer NOT NULL, "parcela" character varying NOT NULL, "tipo" character varying NOT NULL, "pago" character varying NOT NULL, "identificador" character varying NOT NULL, "data_pagamento" TIMESTAMP NOT NULL, CONSTRAINT "PK_a2ac2476e1b46740cc2cfee454c" PRIMARY KEY ("seq"))`);
        await queryRunner.query(`CREATE TABLE "opt_permissoes_usuarios" ("seq" character varying NOT NULL, "cod_permissao" character varying NOT NULL, "cod_usuario" character varying NOT NULL, CONSTRAINT "PK_b07aec559dbe84eb3b14577306c" PRIMARY KEY ("seq"))`);
        await queryRunner.query(`CREATE TABLE "opt_view_ocorrencias" ("opt_seq" character varying NOT NULL, "opt_cod_cliente" character varying NOT NULL, "opt_nome_cliente" character varying NOT NULL, "opt_data_ocorrencia" TIMESTAMP NOT NULL, "opt_obs" character varying NOT NULL, "opt_tipo_ocorrencia" character varying NOT NULL, CONSTRAINT "PK_0e23254c4f5638df846ab78c148" PRIMARY KEY ("opt_seq"))`);
        await queryRunner.query(`CREATE TABLE "opt_cli_request" ("seq" character varying NOT NULL, "opt_cod_cliente" character varying NOT NULL, "data" TIMESTAMP NOT NULL, "quantidade" integer NOT NULL, CONSTRAINT "PK_c4fb104357cc1db0a1b0f97aead" PRIMARY KEY ("seq"))`);
        await queryRunner.query(`CREATE TABLE "opt_ped_app" ("opt_cod_cliente" character varying NOT NULL, "opt_cod_app" character varying NOT NULL, "opt_pedido_app" character varying NOT NULL, "opt_pedido" character varying NOT NULL, "opt_cod_prod" character varying NOT NULL, "opt_cod_prod_meio_1" character varying NOT NULL, "opt_cod_prod_meio_2" character varying NOT NULL, "opt_nome_produto" character varying NOT NULL, "obs_combo" character varying NOT NULL, "ordem" character varying NOT NULL, "cod_grupo" character varying NOT NULL, "quant" integer NOT NULL, "valor_un" integer NOT NULL, "valor_tot_prod" integer NOT NULL, "tipo" character varying NOT NULL, "taxa_ent" integer NOT NULL, "desconto" integer NOT NULL, "hora" character varying NOT NULL, "data" TIMESTAMP NOT NULL, "status" character varying NOT NULL, "novo_status" character varying NOT NULL, "fone_cliente" character varying NOT NULL, "cliente" character varying NOT NULL, "endereco" character varying NOT NULL, "numero" character varying NOT NULL, "bairro" character varying NOT NULL, "complemento" character varying NOT NULL, "cpf_cli" character varying NOT NULL, "valor_total_ped" character varying NOT NULL, "obs_item" character varying NOT NULL, "obs" character varying NOT NULL, "pagamento" character varying NOT NULL, "obs_troco" character varying NOT NULL, "autorizacao" character varying NOT NULL, "id_trans" character varying NOT NULL, "info_car" character varying NOT NULL, "tipo_rec_on" character varying NOT NULL, CONSTRAINT "PK_b7ce30f8c02f362920dd062b53e" PRIMARY KEY ("opt_cod_cliente", "opt_cod_app", "opt_pedido_app", "ordem"))`);
        await queryRunner.query(`CREATE TABLE "opt_cad_setor" ("seq" character varying NOT NULL, "setor" character varying NOT NULL, CONSTRAINT "PK_247f30569c3640e82fb3dcf3229" PRIMARY KEY ("seq"))`);
        await queryRunner.query(`CREATE TABLE "opt_cad_usu" ("opt_codigo_usu" character varying NOT NULL, "opt_usuario" character varying NOT NULL, "opt_email" character varying NOT NULL, "ativo" character varying NOT NULL, CONSTRAINT "PK_f584142e1af87174c9ff45c9f52" PRIMARY KEY ("opt_codigo_usu"))`);
        await queryRunner.query(`CREATE TABLE "opt_view_prox_status" ("opt_cod_app" character varying NOT NULL, "opt_pedido_app" character varying NOT NULL, "novo_status" character varying NOT NULL, "app" character varying NOT NULL, "login" character varying NOT NULL, "senha" character varying NOT NULL, "token" character varying NOT NULL, "rede" character varying NOT NULL, CONSTRAINT "PK_507d4c3dbe78866c4371b579667" PRIMARY KEY ("opt_pedido_app"))`);
        await queryRunner.query(`CREATE TABLE "opt_usuario_suporte" ("seq" character varying NOT NULL, "opt_cod_cliente" character varying NOT NULL, "cod_funcionario" character varying NOT NULL, CONSTRAINT "PK_e88eac295e6be69fab8fbaf99c8" PRIMARY KEY ("seq"))`);
        await queryRunner.query(`CREATE TABLE "opt_suporte" ("seq" character varying NOT NULL, "data" TIMESTAMP NOT NULL, "hora" character varying NOT NULL, "opt_cod_cliente" character varying NOT NULL, "status" character varying NOT NULL, "prioridade" character varying NOT NULL, "atendente" character varying NOT NULL, "titulo" character varying NOT NULL, "descricao" character varying NOT NULL, "contato" character varying NOT NULL, "resolucao" character varying NOT NULL, "cod_setor" character varying NOT NULL, "canal_atendimento" character varying NOT NULL, CONSTRAINT "PK_60e11d1c581b745ac563e689a46" PRIMARY KEY ("seq"))`);
        await queryRunner.query(`CREATE TABLE "opt_view_emp_link" ("opt_cod_cliente" character varying NOT NULL, "opt_cod_empresa" character varying NOT NULL, "opt_nome_cliente" character varying NOT NULL, "opt_cidade" character varying NOT NULL, "opt_dns" character varying NOT NULL, "opt_banco" character varying NOT NULL, "opt_user" character varying NOT NULL, "opt_password" character varying NOT NULL, CONSTRAINT "PK_709bc1a67c8d16effa2937194bc" PRIMARY KEY ("opt_cod_cliente", "opt_cod_empresa"))`);
        await queryRunner.query(`CREATE TABLE "opt_view_suporte" ("seq" character varying NOT NULL, "data" TIMESTAMP NOT NULL, "hora" character varying NOT NULL, "opt_cod_cliente" character varying NOT NULL, "opt_nome_cliente" integer NOT NULL, "status" character varying NOT NULL, "prioridade" character varying NOT NULL, "titulo" character varying NOT NULL, CONSTRAINT "PK_353b9a175f311bcaff9be383202" PRIMARY KEY ("seq"))`);
        await queryRunner.query(`CREATE TABLE "opt_view_sistemas" ("opt_nome_sistema" character varying NOT NULL, CONSTRAINT "PK_19f658a0d95e106a54f55d0b0f0" PRIMARY KEY ("opt_nome_sistema"))`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_endereco" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_bairro" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_cep" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_cidade" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_uf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_mensagem_licenca" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_versao_adm" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_login_wabiz" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_acesso_wabiz" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_token_uai_rango" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_dns" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_banco" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_user" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_data_sinc" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_odbc" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_doc1" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" ADD "opt_doc2" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_cad_usu" ADD "opt_senha" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_cad_usu" ADD "opt_nivel" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opt_suporte" ADD CONSTRAINT "FK_3d00f8808be05f1af50b1f2ec2f" FOREIGN KEY ("opt_cod_cliente") REFERENCES "opt_clientes"("opt_cod_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "opt_suporte" ADD CONSTRAINT "FK_f0ca95817c8a3322d9b9f0de889" FOREIGN KEY ("atendente") REFERENCES "opt_cad_usu"("opt_codigo_usu") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "opt_suporte" ADD CONSTRAINT "FK_ad5d2e94519a4973f028aec7cc7" FOREIGN KEY ("cod_setor") REFERENCES "opt_cad_setor"("seq") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "opt_suporte" DROP CONSTRAINT "FK_ad5d2e94519a4973f028aec7cc7"`);
        await queryRunner.query(`ALTER TABLE "opt_suporte" DROP CONSTRAINT "FK_f0ca95817c8a3322d9b9f0de889"`);
        await queryRunner.query(`ALTER TABLE "opt_suporte" DROP CONSTRAINT "FK_3d00f8808be05f1af50b1f2ec2f"`);
        await queryRunner.query(`ALTER TABLE "opt_cad_usu" DROP COLUMN "opt_nivel"`);
        await queryRunner.query(`ALTER TABLE "opt_cad_usu" DROP COLUMN "opt_senha"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_doc2"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_doc1"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_odbc"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_data_sinc"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_password"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_user"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_banco"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_dns"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_token_uai_rango"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_acesso_wabiz"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_login_wabiz"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_versao_adm"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_mensagem_licenca"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_uf"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_cidade"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_cep"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_bairro"`);
        await queryRunner.query(`ALTER TABLE "opt_clientes" DROP COLUMN "opt_endereco"`);
        await queryRunner.query(`DROP TABLE "opt_view_sistemas"`);
        await queryRunner.query(`DROP TABLE "opt_view_suporte"`);
        await queryRunner.query(`DROP TABLE "opt_view_emp_link"`);
        await queryRunner.query(`DROP TABLE "opt_suporte"`);
        await queryRunner.query(`DROP TABLE "opt_usuario_suporte"`);
        await queryRunner.query(`DROP TABLE "opt_view_prox_status"`);
        await queryRunner.query(`DROP TABLE "opt_cad_usu"`);
        await queryRunner.query(`DROP TABLE "opt_cad_setor"`);
        await queryRunner.query(`DROP TABLE "opt_ped_app"`);
        await queryRunner.query(`DROP TABLE "opt_cli_request"`);
        await queryRunner.query(`DROP TABLE "opt_view_ocorrencias"`);
        await queryRunner.query(`DROP TABLE "opt_permissoes_usuarios"`);
        await queryRunner.query(`DROP TABLE "opt_financeiro"`);
        await queryRunner.query(`DROP TABLE "opt_permissoes"`);
        await queryRunner.query(`DROP TABLE "opt_view_dados_on"`);
        await queryRunner.query(`DROP TABLE "opt_contrato"`);
        await queryRunner.query(`DROP TABLE "opt_clientes"`);
        await queryRunner.query(`DROP TABLE "opt_view_cli_app"`);
    }

}
