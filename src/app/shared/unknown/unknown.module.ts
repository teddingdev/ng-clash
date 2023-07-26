import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnknownRoutingModule } from './unknown-routing.module';
import { UnknownComponent } from './unknown.component';
import { MaterialModule } from '../material/material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [UnknownComponent, NotFoundComponent],
  imports: [CommonModule, UnknownRoutingModule, MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UnknownModule {}
