import { TestBed } from '@angular/core/testing';

import { ComponentRouteReuseStrategyService } from './component-route-reuse-strategy.service';

describe('ComponentRouteReuseStrategyService', () => {
  let service: ComponentRouteReuseStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentRouteReuseStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
