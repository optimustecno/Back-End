import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ViewGruposProdutos } from "./ViewGrupos";

@Entity("opt_view_produtos")
class ViewProdutosCardapio {
    @PrimaryColumn()
    readonly id_cliente: string;
    @PrimaryColumn()
    readonly cod_produto: string;
    @Column()
    readonly grupo: string;
    @Column()
    readonly produto: string;
    @Column()
    readonly descricao: string;
    @Column()
    readonly valor: Number;
    @Column()
    readonly ordem: string;
    @Column()
    readonly exibir: string;
    @Column()
    readonly cod_grupo: string;
    @JoinColumn({ name: "cod_grupo" })
    @ManyToOne(() => ViewGruposProdutos, (grupoproduto) => grupoproduto.produtos)
    grupoproduto: ViewGruposProdutos[];
    @Column()
    readonly webhook: string;
}

export { ViewProdutosCardapio };
