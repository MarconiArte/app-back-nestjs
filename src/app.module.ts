import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './productos/producto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Archivo SQLite que se generará en la raíz del proyecto
      entities: [Producto],
      synchronize: true, // Solo para desarrollo
    }),
    TypeOrmModule.forFeature([Producto]),
    ProductosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
