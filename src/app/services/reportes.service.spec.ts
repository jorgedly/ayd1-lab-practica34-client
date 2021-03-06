import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReportesService } from './reportes.service';

describe('ReportesService', () => {
  let service: ReportesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReportesService]
    });
    service = TestBed.inject(ReportesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('should be misTransferencias', () => {
    expect(service.misTransferencias("")).toBeTruthy();
  });

  
  it('should be transferenciaGeneral', () => {
    expect(service.TranferenciaGeneral()).toBeTruthy();
  });
});
