import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './producto.entity';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { BuscarProductosDTO } from './dto/buscar-productos.dto';

@Injectable()
export class ProductosService {
    constructor(
        @InjectRepository(Producto)
        private readonly producto: Repository<Producto>,
    ) { }

    async buscarProductos(filters: BuscarProductosDTO): Promise<Producto[]> {
        const { codigo, nombre, nota, precio } = filters;

        const conditions: FindOptionsWhere<Producto>[] = [];

        if (codigo) conditions.push({ codigo: Like(`%${codigo}%`) });
        if (nombre) conditions.push({ nombre: Like(`%${nombre}%`) });
        if (nota) conditions.push({ nota: Like(`%${nota}%`) });
        if (precio) conditions.push({ precio });

        if (conditions.length > 0) {
            return this.producto.find({
                where: conditions,
            });
        }

        return this.producto.find();
    }

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
