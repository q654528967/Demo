import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo14SubmitPage } from './demo14-submit.page';

const routes: Routes = [
  {
    path: '',
    component: Demo14SubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo14SubmitPageRoutingModule {}
