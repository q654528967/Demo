import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo12Tab1Page } from './demo12-tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Demo12Tab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo12Tab1PageRoutingModule {}
