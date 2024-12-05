export interface iCliGrupos {
    seq?: string;
    opt_cod_cliente: string;
    cod_grupo: string;
    nome_grupo: string;
    aceita_meio_a_meio: string;
    preco: string;
    ordem: string;
    exibir: string;
}

export interface iCliGrupoAdd {
    seq?: string;
    opt_cod_cliente: string;
    nome: string;
    cod_grupo: string;
    exibir: string;
}

export interface iLinkGrupoAdd {
    seq?: string;
    opt_cod_cliente: string;
    opt_grupo_produto: string;
    opt_grupo_adicional: string;
    opt_exibir: string;
}
export interface iPersonalizacoes {
    opt_cod_cliente: string;
    cod_grupo_adicional: string;
    cod_adicional: string;
    nome: string;
    valor: Number;
    aceita_quantidade: string;
    exibir: string;
}