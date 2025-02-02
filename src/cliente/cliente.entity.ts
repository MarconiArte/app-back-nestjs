import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;


  @Column({ unique: true })
  cuil: string;

  @Column({ nullable: true })
  direccion: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  telefono: string;

  @Column({ nullable: true })
  pais: string;

  @Column({ nullable: true })
  provincia: string;

  @Column({ nullable: true })
  localidad: string;

  @OneToMany(() => Pedido, (pedido) => pedido.cliente)
  pedidos: Pedido[];
}
