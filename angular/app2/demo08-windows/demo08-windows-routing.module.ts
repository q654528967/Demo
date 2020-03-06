import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo08WindowsPage } from './demo08-windows.page';

const routes: Routes = [
  {
    path: '',
    component: Demo08WindowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo08WindowsPageRoutingModule {}
