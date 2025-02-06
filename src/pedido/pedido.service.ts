import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/cliente/cliente.entity';
import { PedidoProductoPivot } from 'src/pedidos_productos_pivot/entities/pedidos_productos_pivot';
import { Producto } from 'src/productos/producto.entity';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(Pedido)
        private pedido: Repository<Pedido>,
        @InjectRepository(Cliente)
        private cliente: Repository<Cliente>,
        @InjectRepository(Producto) 
        private producto: Repository<Pedido>,
        @InjectRepository(PedidoProductoPivot) 
        private pivot: Repository<PedidoProductoPivot>
    ) { }

    async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
        const cliente = await this.cliente.findOne({
        where: { id: createPedidoDto.clienteId }
        });

        if (!cliente) {
        throw new Error('Cliente no encontrado');
        }

        // Crear el pedido
        const pedido = this.pedido.create({
        cliente,
        total: createPedidoDto.total || 0,
        });

        await this.pedido.save(pedido);

        // Procesar productos
        for (const pivotDTO of createPedidoDto.productos) {
        const producto = await this.producto.findOne({ where: { id: pivotDTO.productoId } });

        if (!producto) {
            throw new Error(`Producto con ID ${pivotDTO.productoId} no encontrado`);
        }

        const pivot = this.pivot.create({
            pedido,
            producto,
            cantidad: pivotDTO.cantidad,
        });

        await this.pivot.save(pivot);
    }

    return pedido;
  }

  buscarPedidos(): Promise<Pedido[]> {
    return this.pedido.find({
      relations: ['cliente', 'pedidoProductoPivot', 'pedidoProductoPivot.producto'], // Aquí defines las relaciones a cargar
    });
  }

  async obtenerPedido(id: number): Promise<Pedido | null> {
	return this.pedido.findOne({
	  where: { id },
	  relations: ['cliente', 'pedidoProductoPivot', 'pedidoProductoPivot.producto'], // Relaciona con la entidad pivote y los productos
	});
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }  
}
