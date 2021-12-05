import { Module } from '@nestjs/common';
import { MatrizService } from './matriz.service';
import { MatrizController } from './matriz.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MatrizController],
  providers: [MatrizService],
})
export class MatrizModule {}
