import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClashLinksComponent } from './clash-links.component';

const routes: Routes = [{ path: '', component: ClashLinksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClashLinksRoutingModule { }
