import { Injectable } from '@angular/core';
import { Config, ExternalControlConfig } from '@model';
import { Observable, Subject, switchMap } from 'rxjs';
import { ClashApiService } from '../../api/clash-api.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private dashboardConfigSubject = new Subject<string>();

  dashboardConfig$: Observable<Config> = this.dashboardConfigSubject.pipe(
    switchMap(() => {
      return this.clashApiService.fetchConfig();
    })
  );

  clashVersion$ = this.clashApiService.fetchVersion();

  configExpired() {
    this.dashboardConfigSubject.next('new config');
  }

  fetchVersion() {}

  constructor(private clashApiService: ClashApiService) {}
}
