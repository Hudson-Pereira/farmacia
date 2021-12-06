import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { Matriz } from '@prisma/client';
import { CreateMatrizDto } from './dto/create-matriz.dto';
import { UpdateMatrizDto } from './dto/update-matriz.dto';

@Injectable()
export class MatrizService {
  constructor(private prisma: PrismaService) {}

  async create(createMatrizDto: CreateMatrizDto): Promise<Matriz> {
    const total = await this.prisma.matriz.findMany();
    if (total.length < 1) {
      return await this.prisma.matriz.create({ data: { ...createMatrizDto } });
    }
  }

  async findAll(): Promise<Matriz[]> {
    return await this.prisma.matriz.findMany();
  }

  async findOne(id: number): Promise<Matriz> {
    return await this.prisma.matriz.findUnique({ where: { id } });
  }

  async update(id: number, updateMatrizDto): Promise<Matriz> {
    return await this.prisma.matriz.update({
      data: { ...updateMatrizDto },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.matriz.delete({ where: { id } });
  }
}
