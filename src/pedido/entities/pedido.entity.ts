import { Cliente } from 'src/cliente/cliente.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
}
