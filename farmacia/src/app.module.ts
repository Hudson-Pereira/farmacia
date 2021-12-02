import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatrizModule } from './matriz/matriz.module';

@Module({
  imports: [MatrizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
