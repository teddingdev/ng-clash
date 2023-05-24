import { Component, OnInit } from '@angular/core';
import { Config, ExternalControlConfig } from '@model';
import { ClashApiService } from '@service';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/services/core/store/store.service';

@Component({
  selector: 'app-clash-settings',
  templateUrl: './clash-settings.component.html',
  styleUrls: ['./clash-settings.component.scss'],
})
export class ClashSettingsComponent implements OnInit {
  dashboardConfig$: Observable<Config>;
  /** 外部控制设置 */
  get externalControlConfig() {
    return this.storeService.externalControlConfig;
  }

  ngClashConfig: any | null;
  ngOnInit(): void {}

  constructor(
    private storeService: StoreService,
    private clashApiService: ClashApiService
  ) {
    this.dashboardConfig$ = this.clashApiService.fetchConfig();
  }
}
