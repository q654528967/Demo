import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo02LianxiPage } from './demo02-lianxi.page';

const routes: Routes = [
  {
    path: '',
    component: Demo02LianxiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo02LianxiPageRoutingModule {}
