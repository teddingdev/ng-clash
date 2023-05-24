import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { NavValue } from '@model';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: NavValue.proxies, pathMatch: 'full' },
      {
        path: NavValue.proxies,
        loadChildren: () =>
          import('../clash-proxy/clash-proxy.module').then(
            (m) => m.ClashProxyModule
          ),
      },
      {
        path: NavValue.rules,
        loadChildren: () =>
          import('../clash-rules/clash-rules.module').then(
            (m) => m.ClashRulesModule
          ),
      },
      {
        path: NavValue.logs,
        loadChildren: () =>
          import('../clash-logs/clash-logs.module').then(
            (m) => m.ClashLogsModule
          ),
      },
      {
        path: NavValue.links,
        loadChildren: () =>
          import('../clash-links/clash-links.module').then(
            (m) => m.ClashLinksModule
          ),
      },
      {
        path: NavValue.settings,
        loadChildren: () =>
          import('../clash-settings/clash-settings.module').then(
            (m) => m.ClashSettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
