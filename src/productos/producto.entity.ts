// productos/producto.entity.ts
import { PedidoProductoPivot } from 'src/pedidos_productos_pivot/entities/pedidos_productos_pivot';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255})
  nombre: string;

  @Column({ type: 'varchar', length: 100, unique: true})
  codigo: string;

  @Column({ type: 'decimal', precision: 10, scale: 2})
  precio: number;

  @Column({ type: 'text', nullable: true })
  nota: string;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @OneToMany(() => PedidoProductoPivot, (pedidoProductoPivot) => pedidoProductoPivot.producto)
  pedidoProductosPivot: PedidoProductoPivot[];
}
