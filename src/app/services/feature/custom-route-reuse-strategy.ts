import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

export class CustomRouteReuseStrategy extends RouteReuseStrategy {
  constructor() {
    super();
    console.log('24343243');
  }
  override store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null
  ): void {}
  override shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log(
      `🍅 -> file: custom-route-reuse-strategy.service.ts:17 -> CustomRouteReuseStrategy -> overrideshouldAttach -> route:`,
      route
    );
    return false;
  }
  override shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log(
      `🍅 -> file: custom-route-reuse-strategy.ts:20 -> CustomRouteReuseStrategy -> overrideshouldDetach -> route:`,
      route
    );
    return false;
  }
  override shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    console.log(
      `🍅 -> file: custom-route-reuse-strategy.ts:30 -> CustomRouteReuseStrategy -> curr:`,
      curr
    );
    console.log(
      `🍅 -> file: custom-route-reuse-strategy.ts:30 -> CustomRouteReuseStrategy -> future:`,
      future
    );
    return false;
  }
  override retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    console.log(
      `🍅 -> file: custom-route-reuse-strategy.ts:41 -> CustomRouteReuseStrategy -> overrideretrieve -> route:`,
      route
    );
    return null;
  }
}
