import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoProductoPivot } from './entities/pedidos_productos_pivot';
import { PedidosProductosPivotController } from './pedidos_productos_pivot.controller';
import { PedidosProductosPivotService } from './pedidos_productos_pivot.service';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoProductoPivot])],
  controllers: [PedidosProductosPivotController],
  providers: [PedidosProductosPivotService],
  exports: [TypeOrmModule.forFeature([PedidoProductoPivot])]
})
export class PedidosProductosPivotModule {}
