import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClashProxyComponent } from './clash-proxy.component';

import { CoreModule } from 'src/app/core/core.module';
import { ClashProxyRoutingModule } from './clash-proxy-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ProxyGroupComponent } from './components/proxy-group/proxy-group.component';
import { ProxyCardComponent } from './components/proxy-card/proxy-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClashProxyComponent, ProxyGroupComponent, ProxyCardComponent],
  imports: [
    CommonModule,
    ClashProxyRoutingModule,
    MaterialModule,
    CoreModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClashProxyModule {}
