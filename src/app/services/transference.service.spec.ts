import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TransferenceService } from './transference.service';

describe('TransferenceService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: TransferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransferenceService]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.inject(TransferenceService);
  });


  it('should post the transaction', () => {
    const service: TransferenceService = TestBed.get(TransferenceService);
    let cuenta1 = 8;
    let cuenta2 = 9;
    let monto = 500; 
    const dummy = {res: true}

    service.transferMoney(cuenta1, cuenta2, monto).subscribe( res => {
      expect(res).toEqual(dummy);
    });

    const req = httpMock.expectOne('https://analisis1.herokuapp.com/transferMoney')
    expect(req.request.method).toBe('POST')
    req.flush(dummy);

  });

});
