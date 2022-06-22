import { TestBed } from '@angular/core/testing';

import { CursoDetalleService } from './curso-detalle.service';

describe('CursoDetalleService', () => {
  let service: CursoDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
