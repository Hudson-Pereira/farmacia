import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem vindo a API, utilize as rotas /matriz, /filiais e /produtos... Obrigado';
  }
}
