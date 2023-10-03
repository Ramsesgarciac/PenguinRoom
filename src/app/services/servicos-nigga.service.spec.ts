import { TestBed } from '@angular/core/testing';

import { ServicosNiggaService } from './servicos-nigga.service';

describe('ServicosNiggaService', () => {
  let service: ServicosNiggaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosNiggaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
