import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MatrizService } from './matriz.service';
import { CreateMatrizDto } from './dto/create-matriz.dto';
import { UpdateMatrizDto } from './dto/update-matriz.dto';

@Controller('matriz')
export class MatrizController {
  constructor(private readonly matrizService: MatrizService) {}

  @Post()
  create(@Body() createMatrizDto: CreateMatrizDto) {
    return this.matrizService.create(createMatrizDto);
  }

  @Get()
  findAll() {
    return this.matrizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matrizService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatrizDto: UpdateMatrizDto) {
    return this.matrizService.update(+id, updateMatrizDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matrizService.remove(+id);
  }
}
