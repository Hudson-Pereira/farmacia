import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatrizModule } from './matriz/matriz.module';
import { FilialModule } from './filial/filial.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [MatrizModule, FilialModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
