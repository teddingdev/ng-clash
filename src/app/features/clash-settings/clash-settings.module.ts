import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ClashSettingsRoutingModule } from './clash-settings-routing.module';

import { ClashSettingsComponent } from './clash-settings.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsControlComponent } from './components/settings-control/settings-control.component';

@NgModule({
  declarations: [SettingsComponent, SettingsControlComponent, ClashSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClashSettingsRoutingModule,
    MaterialModule,
  ],
})
export class ClashSettingsModule {}
