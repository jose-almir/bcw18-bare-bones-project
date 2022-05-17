import { TestBed } from '@angular/core/testing';

import { FinanceiroService } from './financeiro.service';

describe('FinanceiroService', () => {
  let service: FinanceiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
