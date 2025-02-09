import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';
import { BuscarClientesDTO } from './dto/buscar-clientes.dto';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly service: ClienteService){}

    //Usar de ejemplo buscar-productos.
    @Get('buscar-clientes')
    async buscarClientes(@Query() filters: BuscarClientesDTO ): Promise<Cliente[]> {
    	return this.service.buscarClientes(filters);
    }
  
    @Get(':id')
    async obtenerCliente(@Param('id') id: string): Promise<Cliente | null> {
    	return this.service.obtenerCliente(+id);
    }
  
    @Post()
    async crearCliente(@Body() cliente: Cliente): Promise<Cliente> {
    	return this.service.crearCliente(cliente);
    }

    @Get('/buscar-cliente-nombre/:nombre')
    async obtenerClienteNombre(@Param('nombre') nombre: string): Promise<Cliente | null>{
		return this.service.buscarClientePorNombre(nombre)
    }
}
