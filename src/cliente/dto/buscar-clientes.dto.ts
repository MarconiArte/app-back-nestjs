import { IsOptional, IsString, IsEmail } from 'class-validator';

export class BuscarClientesDTO {
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    direccion?: string;

    @IsOptional()
    @IsString()
    cuil?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    telefono?: string;

    @IsOptional()
    @IsString()
    pais?: string;

    @IsOptional()
    @IsString()
    provincia?: string;
}
