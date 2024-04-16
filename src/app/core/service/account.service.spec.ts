/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountService } from './account.service';

describe('Service: AccountSerice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountService]
    });
  });

  it('should ...', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
});
