import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ComponentRouteReuseStrategyService extends RouteReuseStrategy {
  constructor() {
    super();
    console.log('23244');
  }
  override store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null
  ): void {}
  override shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  override shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  override shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return false;
  }
  override retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }
}
