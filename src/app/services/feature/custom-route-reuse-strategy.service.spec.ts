import { TestBed } from '@angular/core/testing';

import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';

describe('CustomRouteReuseStrategyService', () => {
  let service: CustomRouteReuseStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CustomRouteReuseStrategy,
        },
      ],
    });
    service = TestBed.inject(CustomRouteReuseStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
