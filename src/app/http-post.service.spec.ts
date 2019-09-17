import { TestBed } from '@angular/core/testing';

import { HttpPostService } from './http-post.service';

describe('HttpPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpPostService = TestBed.get(HttpPostService);
    expect(service).toBeTruthy();
  });
});
