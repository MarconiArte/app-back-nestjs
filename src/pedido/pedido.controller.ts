import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly service: PedidoService) { }

  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.service.create(createPedidoDto);
  }

  @Get('buscar-pedidos')
  buscarPedidos() {
    return this.service.buscarPedidos();
  }

  @Get(':id')
  obtenerPedido(@Param('id') id: string): Promise<Pedido | null> {
    return this.service.obtenerPedido(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.service.update(+id, updatePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
