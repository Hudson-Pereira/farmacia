import { IsNotEmpty, IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateProdutoDto {
  @IsNotEmpty()
  @IsString()
  thumbnail: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsInt()
  preco: number;

  @IsNotEmpty()
  @IsString()
  ingredientes: string;

  @IsNotEmpty()
  @IsBoolean()
  disponibilidade: boolean;

  @IsNotEmpty()
  @IsInt()
  volume: number;

  @IsNotEmpty()
  @IsString()
  fabricante: string;
}
