import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { BuscarClientesDTO } from './dto/buscar-clientes.dto';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente)
        private cliente: Repository<Cliente>,
      ) {}
    
    async buscarClientes(filters: BuscarClientesDTO): Promise<Cliente[]> {
        const { nombre, direccion, cuil, email, telefono, pais, provincia } = filters;

        const conditions: FindOptionsWhere<Cliente>[] = [];

        if (nombre) conditions.push({ nombre: Like(`%${nombre}%`) });
        if (direccion) conditions.push({ direccion: Like(`%${direccion}%`) });
        if (cuil) conditions.push({ cuil: Like(`%${cuil}%`) });
        if (email) conditions.push({ email: Like(`%${email}%`) });
        if (telefono) conditions.push({ telefono: Like(`%${telefono}%`) });
        if (pais) conditions.push({ pais: Like(`%${pais}%`) });
        if (provincia) conditions.push({ provincia: Like(`%${provincia}%`) });

        if (conditions.length > 0) {
            return this.cliente.find({
                where: conditions,
            });
        }

        return this.cliente.find();
    }
    
      async obtenerCliente(id: number): Promise<Cliente | null> {
        return this.cliente.findOneBy({ id });
      }
    
      async crearCliente(cliente: Cliente): Promise<Cliente> {
        return this.cliente.save(cliente);
      }
}
