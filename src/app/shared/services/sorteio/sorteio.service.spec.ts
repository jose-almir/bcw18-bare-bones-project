import { TestBed } from '@angular/core/testing';

import { SorteioService } from './sorteio.service';

describe('SorteioService', () => {
  let service: SorteioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorteioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
