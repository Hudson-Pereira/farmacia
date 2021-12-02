import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatrizModule } from './matriz/matriz.module';
import { FilialModule } from './filial/filial.module';

@Module({
  imports: [MatrizModule, FilialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
