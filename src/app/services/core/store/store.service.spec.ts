import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
        },
        {
          provide: HttpHandler,
        },
      ],
    });
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
