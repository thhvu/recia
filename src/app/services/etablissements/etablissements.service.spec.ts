import { TestBed } from '@angular/core/testing';

import { EtablissementsService } from './etablissements.service';

describe('EtablissementsService', () => {
  let service: EtablissementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtablissementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
