import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo05ListPage } from './demo05-list.page';

const routes: Routes = [
  {
    path: '',
    component: Demo05ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo05ListPageRoutingModule {}
