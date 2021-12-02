import { PartialType } from '@nestjs/mapped-types';
import { CreateMatrizDto } from './create-matriz.dto';

export class UpdateMatrizDto extends PartialType(CreateMatrizDto) {}
