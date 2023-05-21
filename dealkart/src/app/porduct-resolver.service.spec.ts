import { TestBed } from '@angular/core/testing';

import { PorductResolverService } from './porduct-resolver.service';

describe('PorductResolverService', () => {
  let service: PorductResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorductResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
