import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

const produtos = [];

@Injectable()
export class ProdutoService {
  create(createProdutoDto: CreateProdutoDto) {
    produtos.push(createProdutoDto);
    return 'Produto adicionado.';
  }

  findAll() {
    return produtos;
  }

  findOne(id: number) {
    return produtos[id];
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    produtos[id] = updateProdutoDto;
    return `Produto ${updateProdutoDto.nome} alterado.`;
  }

  remove(id: number) {
    delete produtos[id];
    return `Produto removido`;
  }
}
