import { Test } from '@nestjs/testing';

describe('App e2e', () => {
  beforeAll(async () => {
    const moduleRef= await Test.createTestingModule({
      imports: [A],
    }) 
  });

  it.todo('should pass');
});