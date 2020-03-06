import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo12TabsPage } from './demo12-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: Demo12TabsPage,
    children:[
      {path:'tab1',loadChildren:'../demo12-tab1/demo12-tab1.module#Demo12Tab1PageModule'},
      {path:'tab2/:id',loadChildren:'../demo12-tab2/demo12-tab2.module#Demo12Tab2PageModule'},
      {path:'tab3',loadChildren:'../demo12-tab3/demo12-tab3.module#Demo12Tab3PageModule'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Demo12TabsPageRoutingModule {}
