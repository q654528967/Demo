import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo12Tab3Page } from './demo12-tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Demo12Tab3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo12Tab3PageRoutingModule {}
