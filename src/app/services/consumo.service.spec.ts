import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ConsumoService } from './consumo.service';

describe('ConsumoService', () => {
  let service: ConsumoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsumoService]
    });
    service = TestBed.inject(ConsumoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be obtenerTipoCambioFechaInicio', () => {
    expect(service.obtenerTipoCambioFechaInicio("1/1/2020")).toBeTruthy();
  });
  
  it('should be obtenerTipoCambioFechaInicioPromesa', () => {
    expect(service.obtenerTipoCambioFechaInicioPromesa("1/1/2020")).toBeTruthy();
  });

  it('should be obtenerTipoCambioSimple', () => {
    expect(service.obtenerTipoCambioSimple()).toBeTruthy();
  });
  
  it('should be obtenerTipoCambioSimplePromesa', () => {
    expect(service.obtenerTipoCambioSimplePromesa()).toBeTruthy();
  });
});
