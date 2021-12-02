import { Injectable } from '@nestjs/common';
import { CreateMatrizDto } from './dto/create-matriz.dto';
import { UpdateMatrizDto } from './dto/update-matriz.dto';

@Injectable()
export class MatrizService {
  create(createMatrizDto: CreateMatrizDto) {
    return 'This action adds a new matriz';
  }

  findAll() {
    return `This action returns all matriz`;
  }

  findOne(id: number) {
    return `This action returns a #${id} matriz`;
  }

  update(id: number, updateMatrizDto: UpdateMatrizDto) {
    return `This action updates a #${id} matriz`;
  }

  remove(id: number) {
    return `This action removes a #${id} matriz`;
  }
}
