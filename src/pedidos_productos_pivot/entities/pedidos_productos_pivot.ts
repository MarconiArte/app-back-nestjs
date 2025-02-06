import { Pedido } from "src/pedido/entities/pedido.entity";
import { Producto } from "src/productos/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("pedidos_productos_pivot")
export class PedidoProductoPivot{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Pedido, (pedido) => pedido.pedidoProductoPivot, { onDelete: 'CASCADE' })
    pedido: Pedido;

    @ManyToOne(() => Producto, (producto) => producto.pedidoProductosPivot, { eager: true })
    producto: Producto;

    @Column({ type: 'int', default: 1 })
    cantidad: number;
}