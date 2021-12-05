import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateMatrizDto {
  @IsNotEmpty()
  @IsString()
  logo: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsInt()
  cnpj: number;

  @IsNotEmpty()
  @IsString()
  end: string;

  @IsString()
  funcionamento: string;

  @IsNotEmpty()
  @IsString()
  responsavel: string;

  @IsNotEmpty()
  @IsInt()
  telefone: number;
}
