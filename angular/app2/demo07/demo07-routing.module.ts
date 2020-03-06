import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo07Page } from './demo07.page';

const routes: Routes = [
  {
    path: '',
    component: Demo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo07PageRoutingModule {}
