import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente)
        private cliente: Repository<Cliente>,
      ) {}
    
      async obtenerClientes(): Promise<Cliente[]> {
        return this.cliente.find();
      }
    
      async obtenerCliente(id: number): Promise<Cliente | null> {
        return this.cliente.findOneBy({ id });
      }
    
      async crearCliente(cliente: Cliente): Promise<Cliente> {
        return this.cliente.save(cliente);
      }
}
