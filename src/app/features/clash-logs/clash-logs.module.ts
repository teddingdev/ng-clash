import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClashLogsRoutingModule } from './clash-logs-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { SysLogComponent } from './components/sys-log/sys-log.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from 'src/app/services/feature/custom-route-reuse-strategy';

@NgModule({
  declarations: [SysLogComponent],
  imports: [CommonModule, ClashLogsRoutingModule, MaterialModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy,
    },
  ],
})
export class ClashLogsModule {}
