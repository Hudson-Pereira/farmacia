import { Injectable } from '@nestjs/common';
import { CreateFilialDto } from './dto/create-filial.dto';
import { UpdateFilialDto } from './dto/update-filial.dto';

const filiais = [];

@Injectable()
export class FilialService {
  create(createFilialDto: CreateFilialDto) {
    filiais.push(createFilialDto);
    return 'Filial adicionada com sucesso.';
  }

  findAll() {
    return filiais;
  }

  findOne(id: number) {
    return filiais[id];
  }

  update(id: number, updateFilialDto: UpdateFilialDto) {
    filiais[id] = updateFilialDto;
    return `Filial ${updateFilialDto.nome} alterada.`;
  }

  remove(id: number) {
    delete filiais[id];
    return `Filial removida.`;
  }
}
