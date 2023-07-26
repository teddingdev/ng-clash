import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutComponent } from './components/layout/layout.component';

import { MaterialModule } from '../../shared/material/material.module';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [LayoutComponent, MenuComponent, DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule, CoreModule],
})
export class DashboardModule { }
