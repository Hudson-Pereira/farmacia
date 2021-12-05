import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { Filial } from '@prisma/client';
import { CreateFilialDto } from './dto/create-filial.dto';

const filiais = [];

@Injectable()
export class FilialService {
  constructor(private prisma: PrismaService) {}

  async create(createFilialDto: CreateFilialDto): Promise<Filial> {
    return await this.prisma.filial.create({ data: { ...createFilialDto } });
  }

  async findAll(): Promise<Filial[]> {
    return await this.prisma.filial.findMany();
  }

  async findOne(id: number): Promise<Filial> {
    return await this.prisma.filial.findUnique({ where: { id } });
  }

  async update(id: number, updateFilialDto): Promise<Filial> {
    return await this.prisma.filial.update({
      data: { ...updateFilialDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.filial.delete({ where: { id } });
  }
}
