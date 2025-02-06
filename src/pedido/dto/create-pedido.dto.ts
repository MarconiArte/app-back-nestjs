import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { PedidoProductoPivotDTO } from 'src/pedidos_productos_pivot/dto/pedidos_productos_pivot';

export class CreatePedidoDto {
    @IsNotEmpty()
    @IsNumber()
    clienteId: number;

    @IsOptional()
    @IsNumber()
    total?: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PedidoProductoPivotDTO)
    productos: PedidoProductoPivotDTO[];
}

