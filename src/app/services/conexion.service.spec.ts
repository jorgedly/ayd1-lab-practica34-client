import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ConexionService } from './conexion.service';

describe('ConexionService', () => {
  let service: ConexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConexionService]
    });
    service = TestBed.inject(ConexionService);
  });

  it('should be created', async () => {
    service = TestBed.get(ConexionService);
    expect(service).toBeTruthy();
  });

  it('should be obtenerTipoCambioSimple', () => {
    expect(service.obtenerCambioSimple()).toBeTruthy();
  });

  it('should be obtenerCambioSimplePromesa', () => {
    expect(service.obtenerCambioSimplePromesa()).toBeTruthy();
  });

  it('should be obtenerTipoCambioFechaInicio', () => {
    expect(service.obtenerTipoCambioFechaInicio("1/1/2020")).toBeTruthy();
  });

  it('should be obtenerTipoCambioFechaInicioPromesa', () => {
    expect(service.obtenerTipoCambioFechaInicioPromesa("1/1/2020")).toBeTruthy();
  });

});
