import { TestBed, inject } from '@angular/core/testing';

import { BigtoService } from './bigto.service';

describe('BigtoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BigtoService]
    });
  });

  it('should be created', inject([BigtoService], (service: BigtoService) => {
    expect(service).toBeTruthy();
  }));
});
