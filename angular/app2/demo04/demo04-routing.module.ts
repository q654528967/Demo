import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo04Page } from './demo04.page';

const routes: Routes = [
  {
    path: '',
    component: Demo04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo04PageRoutingModule {}
