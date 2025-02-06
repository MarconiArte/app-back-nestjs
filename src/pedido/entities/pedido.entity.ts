import { Cliente } from 'src/cliente/cliente.entity';
import { PedidoProductoPivot } from 'src/pedidos_productos_pivot/entities/pedidos_productos_pivot';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity("pedidos")
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cliente, (cliente) => cliente.pedidos, { eager: true })
    cliente: Cliente;

    @CreateDateColumn()
    fecha_creacion: Date;

    @Column({ default: 'pendiente' })
    estado: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    total: number;

    @OneToMany(() => PedidoProductoPivot, (pedidoProductoPivot) => pedidoProductoPivot.pedido)
    pedidoProductoPivot: PedidoProductoPivot[];
}
