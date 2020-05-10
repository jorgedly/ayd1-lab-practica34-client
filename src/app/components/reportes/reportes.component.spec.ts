import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReportesComponent } from './reportes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError, of } from 'rxjs';
import { ReportesService } from 'src/app/services/reportes.service';

fdescribe('ReportesComponent', () => {
  let component: ReportesComponent;
  let fixture: ComponentFixture<ReportesComponent>;
  let spy: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ReportesComponent],
      declarations: [ReportesComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When obtenerGeneral() is called', () => {
    it('should handle error', () => {
      spyOn(component.reporteService, 'TranferenciaGeneral').and.returnValue(of({ err: 'err' }));
      component.obtenerGeneral();
      expect(component.fgeneral).toBeTrue();
    });

    it('should handle error', () => {
      spyOn(component.reporteService, 'TranferenciaGeneral').and.returnValue(throwError({ err: 'err' }));
      component.obtenerGeneral();
      expect(component.fgeneral).toBeFalse();
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

});
