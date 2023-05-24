import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClashProxyComponent } from './clash-proxy.component';

const routes: Routes = [
  {
    path: '',
    component: ClashProxyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClashProxyRoutingModule {}
