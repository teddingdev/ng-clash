import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuleListComponent } from './components/rule-list/rule-list.component';

const routes: Routes = [
  {
    path: '',
    component: RuleListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClashRulesRoutingModule {}
