import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClashLinksRoutingModule } from './clash-links-routing.module';

import { ClashLinksComponent } from './clash-links.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ConnectionComponent } from './components/connection/connection.component';


@NgModule({
  declarations: [
    ClashLinksComponent,
    ConnectionComponent
  ],
  imports: [
    CommonModule,
    ClashLinksRoutingModule,
    MaterialModule
  ]
})
export class ClashLinksModule { }
