import { IsInt, IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class CreateFilialDto {
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

  @IsNotEmpty()
  @IsString()
  funcionamento: string;

  @IsNotEmpty()
  @IsString()
  responsavel: string;

  @IsNotEmpty()
  @IsInt()
  telefone: number;

  @IsNotEmpty()
  @IsString()
  matriz: string;
}
