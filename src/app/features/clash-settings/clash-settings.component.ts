import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

import { HostService } from 'src/app/services/api/host.service';
import { StoreService } from 'src/app/services/core/store/store.service';

import { Config } from '@model';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-clash-settings',
  templateUrl: './clash-settings.component.html',
  styleUrls: ['./clash-settings.component.scss'],
})
export class ClashSettingsComponent implements OnInit {
  dashboardConfig: Config | null = null;

  /** 外部控制设置 */
  get externalControlConfig() {
    return this.hostService.externalControlConfig;
  }

  updateDashboardConfig() {
    this.storeService.configExpired();
  }

  ngOnInit(): void {
    this.updateDashboardConfig();
    if (isPlatformBrowser(this.platformId)) {
      this.storeService.dashboardConfig$.subscribe((config) => {
        this.dashboardConfig = config;
      });
    }
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private hostService: HostService,
    private storeService: StoreService
  ) {}
}
