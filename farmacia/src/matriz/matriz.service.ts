import { Injectable } from '@nestjs/common';
import { CreateMatrizDto } from './dto/create-matriz.dto';
import { UpdateMatrizDto } from './dto/update-matriz.dto';

const matriz = [];

@Injectable()
export class MatrizService {
  create(createMatrizDto: CreateMatrizDto) {
    matriz.push(createMatrizDto);
    return 'Matriz adicionada.';
  }

  findAll() {
    return matriz;
  }

  findOne(id: number) {
    return matriz[id];
  }

  update(id: number, updateMatrizDto: UpdateMatrizDto) {
    matriz[id] = updateMatrizDto;
    return `Dados alterados.`;
  }

  remove(id: number) {
    delete matriz[id];
    return `Dados deletados.`;
  }
}
