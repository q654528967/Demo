import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo03ListPage } from './demo03-list.page';

const routes: Routes = [
  {
    path: '',
    component: Demo03ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo03ListPageRoutingModule {}
