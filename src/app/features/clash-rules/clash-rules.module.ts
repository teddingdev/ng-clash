import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClashRulesRoutingModule } from './clash-rules-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { RuleListComponent } from './components/rule-list/rule-list.component';

@NgModule({
  declarations: [RuleListComponent],
  imports: [CommonModule, ClashRulesRoutingModule, MaterialModule],
})
export class ClashRulesModule {}
