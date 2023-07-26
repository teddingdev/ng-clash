import { TestBed } from '@angular/core/testing';

import { ClashApiService } from './clash-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ClashService', () => {
  let service: ClashApiService;

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
    service = TestBed.inject(ClashApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
