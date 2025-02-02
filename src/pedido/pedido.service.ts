import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/cliente/cliente.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedido: Repository<Pedido>,
    @InjectRepository(Cliente)
    private cliente: Repository<Cliente>
  ) { }

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const cliente = await this.cliente.findOne({
      where: { id: createPedidoDto.clienteId }
    });

    if (!cliente) {
      throw new Error('Cliente no encontrado');
    }

    const pedido = this.pedido.create({
      ...createPedidoDto,
      cliente,  // Asignamos el cliente al pedido
    });

    return this.pedido.save(pedido);
  }

  buscarPedidos() {
    return this.pedido.find();
  }

  obtenerPedido(id: number): Promise<Pedido | null> {
    return this.pedido.findOneBy({ id });
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
