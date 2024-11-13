import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cliente')
export class Cliente  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255})
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
}
