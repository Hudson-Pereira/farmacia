import { Module } from '@nestjs/common';
import { MatrizService } from './matriz.service';
import { MatrizController } from './matriz.controller';

@Module({
  controllers: [MatrizController],
  providers: [MatrizService]
})
export class MatrizModule {}
