import { TestBed } from '@angular/core/testing';

import { ListeAccountsService } from './liste-accounts.service';

describe('ListeAccountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeAccountsService = TestBed.get(ListeAccountsService);
    expect(service).toBeTruthy();
  });
});
