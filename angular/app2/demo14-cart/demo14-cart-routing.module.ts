import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo14CartPage } from './demo14-cart.page';

const routes: Routes = [
  {
    path: '',
    component: Demo14CartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo14CartPageRoutingModule {}
