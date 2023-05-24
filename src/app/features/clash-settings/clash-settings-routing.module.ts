import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClashSettingsComponent } from './clash-settings.component';
import { NgClass } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ClashSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClashSettingsRoutingModule {}
