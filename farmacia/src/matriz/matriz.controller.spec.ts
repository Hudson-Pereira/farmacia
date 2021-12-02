import { Test, TestingModule } from '@nestjs/testing';
import { MatrizController } from './matriz.controller';
import { MatrizService } from './matriz.service';

describe('MatrizController', () => {
  let controller: MatrizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatrizController],
      providers: [MatrizService],
    }).compile();

    controller = module.get<MatrizController>(MatrizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
