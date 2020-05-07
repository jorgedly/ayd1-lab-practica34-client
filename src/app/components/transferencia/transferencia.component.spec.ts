import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaComponent } from './transferencia.component';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('TransferenciaComponent', () => {
  let component: TransferenciaComponent;
  let fixture: ComponentFixture<TransferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ TransferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When passMoney() is called', () =>  {
    it('should all be fine', () => {
      spyOn(component.transferService,'transferMoney').and.returnValue(of({res: true}));
      component.passMoney();
      expect(component.error).toBeFalsy();
    });
  });

  describe('When showMessage() is called', () =>  {
    it('should be fine', () => {
      component.showMessage(true);
      expect(component.error).toBeFalse();
    });

    it('should should handle error', () => {
      component.showMessage(false);
      expect(component.error).toBeTruthy();
    });
  });

});
