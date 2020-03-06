import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children:[
          {path:'',redirectTo:'/home/tab1',pathMatch:'full'},
          {path:'tab1',loadChildren: () => import('../index/index.module').then( m => m.IndexPageModule)},
          {path:'tab2',loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)},
          {path:'tab3',loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)},
          {path:'tab4',loadChildren: () => import('../not-found/not-found.module').then( m => m.NotFoundPageModule)}
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
