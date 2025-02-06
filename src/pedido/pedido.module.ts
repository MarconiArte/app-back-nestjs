import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/cliente/cliente.entity';
import { PedidoProductoPivot } from 'src/pedidos_productos_pivot/entities/pedidos_productos_pivot';
import { Producto } from 'src/productos/producto.entity';
import { Pedido } from './entities/pedido.entity';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido, Cliente, Producto, PedidoProductoPivot]),
  ],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule { }
