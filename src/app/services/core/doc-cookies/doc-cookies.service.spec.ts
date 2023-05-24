import { TestBed } from '@angular/core/testing';

import { DocCookiesService } from './doc-cookies.service';

describe('DocCookiesService', () => {
  let service: DocCookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocCookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
