import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClashLogsRoutingModule } from './clash-logs-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { SysLogComponent } from './components/sys-log/sys-log.component';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  declarations: [SysLogComponent],
  imports: [CommonModule, ClashLogsRoutingModule, MaterialModule],
  providers: [],
})
export class ClashLogsModule {}
