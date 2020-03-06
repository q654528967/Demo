import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo12Tab2Page } from './demo12-tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Demo12Tab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo12Tab2PageRoutingModule {}
