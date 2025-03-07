import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './producto.entity';
import { BuscarProductosDTO } from './dto/buscar-productos.dto';

@Controller('productos')
export class ProductosController {
    constructor(private readonly service: ProductosService) {}

    @Get('buscar-productos')
    async buscarProductos(@Query() filters: BuscarProductosDTO): Promise<Producto[]> {
      return this.service.buscarProductos(filters);
    }

    @Post()
    async crearProducto(@Body() data: Partial<Producto>): Promise<Producto> {
        return this.service.crearProducto(data);
    }

    @Get()
    async obtenerProductos(): Promise<Producto[]> {
        return this.service.obtenerProductos();
    }

    @Get(':id')
    async obtenerProductoPorId(@Param('id') id: number): Promise<Producto> {
        return this.service.obtenerProductoPorId(id);
    }

    @Patch(':id')
    async actualizarProducto(
        @Param('id') id: number,
        @Body() data: Partial<Producto>,
    ): Promise<Producto> {
        return this.service.actualizarProducto(id, data);
    }

    @Delete(':id')
    async eliminarProducto(@Param('id') id: number): Promise<void> {
        return this.service.eliminarProducto(id);
    }
}
