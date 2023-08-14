import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, Subject, switchMap } from 'rxjs';

import { ClashApiService } from '../api/clash-api.service';

import { PolicyGroup, PolicyGroupType, ProxyProviders, ProxyType, Proxy } from '@model';

@Injectable({
  providedIn: 'root',
})
export class ClashService {
  proxies$: Observable<{
    proxies: Proxy[];
    policyGroups: PolicyGroup[];
    global: (Proxy | PolicyGroup)[];
  }>;

  providers$ = new Subject<ProxyProviders>();

  private fetchAction$ = new BehaviorSubject<string>(new Date().toString());

  /**
   * @param timestamp 时间戳
   */
  fetch(timestamp: string) {
    // ^?
    this.fetchAction$.next(timestamp);
  }

  fetchProviders() {
    return this.clashApiService.fetchProvideMap().pipe(map((res) => res.providers));
  }

  putProxy(proxyName: string, policyName: string) {
    return this.clashApiService.putProxy(proxyName, policyName);
  }

  constructor(private clashApiService: ClashApiService) {
    this.proxies$ = this.fetchAction$.pipe(
      switchMap(() => {
        return this.clashApiService.fetchProxyMap().pipe(
          map((res) => res.proxies),
          map((list) => {
            const proxies = Object.values(list).filter((p) =>
              Object.values(ProxyType).find((q) => q === p.type)
            ) as Proxy[];
            const policyGroups = Object.values(list).filter((p) =>
              Object.values(PolicyGroupType).find((q) => q === p.type)
            ) as PolicyGroup[];
            const global = Object.values(list).filter((p) => p.name === 'GLOBAL');
            return { proxies, policyGroups, global };
          })
        );
      }),
      shareReplay(1)
    );
  }
}
