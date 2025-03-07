import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './productos/producto.entity';
import { ClienteModule } from './cliente/cliente.module';
import { Cliente } from './cliente/cliente.entity';
import { PedidoModule } from './pedido/pedido.module';
import { Pedido } from './pedido/entities/pedido.entity';
import { PedidoProductoPivot } from './pedidos_productos_pivot/entities/pedidos_productos_pivot';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Archivo SQLite que se generará en la raíz del proyecto
      entities: [Producto, Cliente, Pedido, PedidoProductoPivot],
      synchronize: true, // Solo para desarrollo
    }),
    TypeOrmModule.forFeature([Producto, Cliente, Pedido, PedidoProductoPivot]),
    ProductosModule,
    ClienteModule,
    PedidoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
