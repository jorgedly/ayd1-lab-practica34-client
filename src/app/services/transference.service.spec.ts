import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TransferenceService } from './transference.service';

describe('TransferenceService', () => {
  let service: TransferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransferenceService]
    });
    service = TestBed.inject(TransferenceService);
  });

  /*it('should be created', () => {
    expect(service).toBeTruthy();
  });*/
});
