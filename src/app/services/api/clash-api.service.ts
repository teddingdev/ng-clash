import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { HostService } from './host.service';

import { Config, Proxies, ProxyProviders, Rules } from '@model';

@Injectable({
  providedIn: 'root',
})
export class ClashApiService {
  private get hostname() {
    return this.hostService.hostname;
  }

  fetchProxyMap() {
    const url = `${this.hostname}/proxies`;
    return this.http.get<Proxies>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return [];
      })
    );
  }

  fetchProvideMap() {
    const url = `${this.hostname}/providers/proxies`;
    return this.http.get<ProxyProviders>(url);
  }

  putProxy(proxyName: string, policyName: string) {
    const url = `${this.hostname}/proxies/${policyName}`;
    return this.http.put<null>(url, { name: proxyName }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  fetchConfig() {
    const url = `${this.hostname}/configs`;
    return this.http.get<Config>(url);
  }

  putConfig(body: Partial<Config>) {
    const url = `${this.hostname}/configs`;
    return this.http.put<null>(url, body).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  patchConfig(body: Partial<Config>) {
    const url = `${this.hostname}/configs`;
    return this.http.patch<null>(url, body).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  fetchRules() {
    const url = `${this.hostname}/rules`;
    console.log(
      `🍅 -> file: clash-api.service.ts:58 -> ClashApiService -> fetchRules -> this.hostname:`,
      this.hostname
    );
    console.log(
      `🍅 -> file: clash-api.service.ts:58 -> ClashApiService -> fetchRules -> url:`,
      url
    );
    return this.http.get<Rules>(url);
  }

  fetchVersion() {
    const url = `${this.hostname}/version`;
    return this.http.get<{
      premium: boolean;
      version: string;
    }>(url);
  }

  constructor(private http: HttpClient, private hostService: HostService) {}
}
