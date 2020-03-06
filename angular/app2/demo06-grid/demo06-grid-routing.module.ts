import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo06GridPage } from './demo06-grid.page';

const routes: Routes = [
  {
    path: '',
    component: Demo06GridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo06GridPageRoutingModule {}
