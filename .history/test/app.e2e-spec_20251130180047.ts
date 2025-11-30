import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('App e2e', () => {\
  beforeAll(async () => {
    const moduleRef= await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app =moduleRef.createNestApplication();
  });

  it.todo('should pass');
});