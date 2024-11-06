import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class BuscarProductosDTO{
    @IsOptional()
    @IsString()
    codigo?:string;

    @IsOptional()
    @IsString()
    nombre?:string;

    @IsOptional()
    @IsString()
    nota?:string;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    precio?:number;
}