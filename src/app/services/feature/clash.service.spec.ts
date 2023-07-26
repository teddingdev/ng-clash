import { TestBed } from '@angular/core/testing';

import { ClashService } from './clash.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ClashService', () => {
  let service: ClashService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: HttpClient,
        },
        {
          provide: HttpHandler,
        },
      ],
    });
    service = TestBed.inject(ClashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
