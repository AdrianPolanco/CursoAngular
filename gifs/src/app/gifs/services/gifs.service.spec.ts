import { TestBed } from '@angular/core/testing';

import { GifService } from './gifs.service';

describe('GifsService', () => {
  let service: GifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
