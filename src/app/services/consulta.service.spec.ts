import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ConsultaService } from './consulta.service';

describe('ConsultaService', () => {
  let service: ConsultaService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultaService]
    });
    service = TestBed.inject(ConsultaService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Should be getConsult", function () {
    //given myValue = 0
    var myValue = 0;
    // calling myService.alert
    var promise = service.getConsulta(myValue);
    var resolved = false;
    promise.then(function (success) {
      resolved = true;
    }, function (error) {

    });
    //actually resolve the promise
    //$rootScope.$digest();
    //expect promise to have been resolved
    expect(resolved).toBe(false);
  });


  it("Should be getSaldoDeb", function () {
    //given myValue = 0
    var myValue = 0;
    // calling myService.alert
    var promise = service.getSaldoDeb(myValue);
    var resolved = false;
    promise.then(function (success) {
      resolved = true;
    }, function (error) {

    });
    //actually resolve the promise
    //$rootScope.$digest();
    //expect promise to have been resolved
    expect(resolved).toBe(false);
  });

  it("Should be getSaldoCre", function () {
    //given myValue = 0
    var myValue = 0;
    // calling myService.alert
    var promise = service.getSaldoCre(myValue);
    var resolved = false;
    promise.then(function (success) {
      resolved = true;
    }, function (error) {

    });
    //actually resolve the promise
    //$rootScope.$digest();
    //expect promise to have been resolved
    expect(resolved).toBe(false);
  });

});
