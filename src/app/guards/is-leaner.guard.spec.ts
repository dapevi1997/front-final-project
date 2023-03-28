import { TestBed } from '@angular/core/testing';

import { IsLeanerGuard } from './is-leaner.guard';

describe('IsLeanerGuard', () => {
  let guard: IsLeanerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLeanerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
