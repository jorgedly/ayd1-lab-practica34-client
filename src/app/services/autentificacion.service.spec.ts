import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AutentificacionService } from './autentificacion.service';

describe('AutentificacionService', () => {
  let service: AutentificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AutentificacionService]
    });
    service = TestBed.inject(AutentificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('LOGIN: validar email incorrecto', async function () {
    expect(service.verificarLogin('prueba@com','123456')).toBe(false);
  });

  it('LOGIN: validar seguridad en email', async function () {
    expect(service.verificarLogin('SELECT * FROM@com','123456')).toBe(false);
  });

  it('LOGIN: validar seguridad en password', async function () {
    expect(service.verificarLogin('prueba@com','select')).toBe(false);
  });

  it('LOGIN: validar datos correctos de inicio de sesión', async function () {
    expect(service.verificarLogin('ruthlechuga@gmail.com','123456')).toBe(true);
  });

  it('REGISTRO: validar nombre incorrecto', async function () {
    expect(service.verificarRegistro('123','prueba',2,2,'prueba@gmail.com','123456')).toBe(false);
  });

  it('REGISTRO: validar apellido incorrecto', async function () {
    expect(service.verificarRegistro('prueba','Ape123',80,90,'prueba@gmail.com','123456')).toBe(false);
  });

  it('REGISTRO: validar DPI incorrecto', async function () {
    expect(service.verificarRegistro('prueba','prueba','error',20,'prueba@gmail.com','123456')).toBe(false);
  });

  it('REGISTRO: validar no. cuenta incorrecto', async function () {
    expect(service.verificarRegistro('prueba','prueba',12,'error','prueba@gmail.com','123456')).toBe(false);
  });

  it('REGISTRO: validar correo incorrecto', async function () {
    expect(service.verificarRegistro('prueba','prueba',13,12,'prueba@.com','123456')).toBe(false);
  });

  it('REGISTRO: validar datos correctos', async function () {
    expect(service.verificarRegistro('prueba','prueba',12,12,'prueba@gmail.com','123456')).toBe(true);
  });

  it('MODIFICAR PERFIL: validar email incorrecto', async function () {
    expect(service.verificarPerfil(1,'prueba@com','123456')).toBe(false);
  });

  it('MODIFICAR PERFIL: validar seguridad en email', async function () {
    expect(service.verificarPerfil(1,'SELECT * FROM@com','123456')).toBe(false);
  });

  it('MODIFICAR PERFIL: validar seguridad en password', async function () {
    expect(service.verificarPerfil(1,'prueba@com','select')).toBe(false);
  });

  it('MODIFICAR PERFIL: validar cuenta incorrecta', async function () {
    expect(service.verificarPerfil('error','prueba@com','select')).toBe(false);
  });

  it('MODIFICAR PERFIL: validar datos correctos de inicio de sesión', async function () {
    expect(service.verificarPerfil(1,'ruthlechuga@gmail.com','123456')).toBe(true);
  });


});
