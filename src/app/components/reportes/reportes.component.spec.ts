import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { ReportesComponent } from "./reportes.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { of, throwError } from "rxjs";
import { ReportesService } from 'src/app/services/reportes.service';

describe("ReportesComponent", () => {
  let component: ReportesComponent;
  let fixture: ComponentFixture<ReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ReportesComponent],
      declarations: [ReportesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });


  describe('When obtenerGeneral() is called', () => {
    it('should handle error', () => {
      spyOn(component.reporteService, 'TranferenciaGeneral').and.returnValue(of({ err: 'err' }));
      component.obtenerGeneral();
      expect(component.general).toBeTruthy();
    });

    it('should handle error', () => {
      spyOn(component.reporteService, 'TranferenciaGeneral').and.returnValue(throwError({ err: 'err' }));
      component.obtenerGeneral();
      expect(component.general).toBeDefined();
      expect(component.general).not.toBeUndefined();
    });
  });

  describe('When obtenerMis() is called', () => {
    var id = 23;
    it('should handle error', () => {
      spyOn(component.reporteService, 'misTransferencias').and.returnValue(of({ err: 'err' }));
      component.obtenerMis(id);
      expect(component.miReporte).toBeDefined();
    });

    it('should handle error', () => {
      spyOn(component.reporteService, 'misTransferencias').and.returnValue(throwError({ err: 'err' }));
      component.obtenerMis(id);
      expect(component.miReporte).not.toBeNull();
    });
  });

  describe('When generatePdf() is called', () => {
    it('should handle fine', () => {

      component.generatePdf();
      expect(component.encabezado).toBeDefined();
      // expect(component.general.length).toBe(4);

    });
  });

  describe('When generateMiPdf() is called', () => {
    it('should handle fine', () => {

      component.generateMiPdf();
      expect(component.encabezado).toBeDefined();
      // expect(component.general.length).toBe(4);

    });
  });







});