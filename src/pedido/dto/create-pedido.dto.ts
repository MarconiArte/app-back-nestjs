import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePedidoDto {
    @IsNotEmpty()
    @IsNumber()
    clienteId: number;

    @IsOptional()
    @IsNumber()
    total?: number;
}

