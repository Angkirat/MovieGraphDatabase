import { TestBed } from '@angular/core/testing';

import { EntityPullService } from './entity-pull.service';

describe('EntityPullService', () => {
  let service: EntityPullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityPullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
