import { Test, TestingModule } from '@nestjs/testing';
import { MatrizService } from './matriz.service';

describe('MatrizService', () => {
  let service: MatrizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatrizService],
    }).compile();

    service = module.get<MatrizService>(MatrizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
