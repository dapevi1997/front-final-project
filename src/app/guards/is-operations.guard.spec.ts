import { TestBed } from '@angular/core/testing';

import { IsOperationsGuard } from './is-operations.guard';

describe('IsOperationsGuard', () => {
  let guard: IsOperationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsOperationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
