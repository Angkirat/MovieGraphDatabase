import { TestBed } from '@angular/core/testing';

import { GraphConnectionService } from './graph-connection.service';

describe('GraphConnectionService', () => {
  let service: GraphConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
