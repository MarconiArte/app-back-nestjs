import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
    constructor(
        @InjectRepository(Producto)
        private readonly producto: Repository<Producto>,
    ){}

    async crearProducto(data: Partial<Producto>): Promise<Producto> {
        const producto = this.producto.create(data);
        return this.producto.save(producto);
    }
    
    async obtenerProductos(): Promise<Producto[]> {
        return this.producto.find();
    }
    
    async obtenerProductoPorId(id: number): Promise<Producto> {
        const producto = await this.producto.findOneBy({ id });
        if (!producto) {
            throw new Error('Producto no encontrado');
        }
        return producto;
    }
    
    async actualizarProducto(id: number, data: Partial<Producto>): Promise<Producto> {
        await this.producto.update(id, data);
        const producto = await this.producto.findOneBy({ id });
        
        if (!producto) {
          throw new Error('Producto no encontrado');
        }
        return producto;
    }
      
    async eliminarProducto(id: number): Promise<void> {
        await this.producto.delete(id);
    }
}
