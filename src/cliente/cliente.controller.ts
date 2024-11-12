import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly service: ClienteService){}

    //Usar de ejemplo buscar-productos.
    @Get()
    async obtenerClientes(): Promise<Cliente[]> {
      return this.service.obtenerClientes();
    }
  
    @Get(':id')
    async obtenerCliente(@Param('id') id: string): Promise<Cliente | null> {
      return this.service.obtenerCliente(+id);
    }
  
    @Post()
    async crearCliente(@Body() cliente: Cliente): Promise<Cliente> {
      return this.service.crearCliente(cliente);
    }
}
