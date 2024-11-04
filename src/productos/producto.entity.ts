// productos/producto.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
