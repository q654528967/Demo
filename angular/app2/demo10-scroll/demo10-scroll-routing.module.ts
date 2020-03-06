import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo10ScrollPage } from './demo10-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: Demo10ScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo10ScrollPageRoutingModule {}
