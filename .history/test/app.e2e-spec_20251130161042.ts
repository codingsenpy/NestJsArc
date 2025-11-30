import { Test } from '@nestjs/testing';
im

describe('App e2e', () => {
  beforeAll(async () => {
    const moduleRef= await Test.createTestingModule({
      imports: [AppModule],
    }).compile(); 
  });

  it.todo('should pass');
});