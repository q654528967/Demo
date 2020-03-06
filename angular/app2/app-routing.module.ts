import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'demo01',
    loadChildren: () => import('./demo01/demo01.module').then( m => m.Demo01PageModule)
  },
  {
    path: 'demo02-lianxi',
    loadChildren: () => import('./demo02-lianxi/demo02-lianxi.module').then( m => m.Demo02LianxiPageModule)
  },
  {
    path: 'demo03-list',
    loadChildren: () => import('./demo03-list/demo03-list.module').then( m => m.Demo03ListPageModule)
  },
  {
    path: 'demo04',
    loadChildren: () => import('./demo04/demo04.module').then( m => m.Demo04PageModule)
  },
  {
    path: 'demo05-list',
    loadChildren: () => import('./demo05-list/demo05-list.module').then( m => m.Demo05ListPageModule)
  },
  {
    path: 'demo06',
    loadChildren: () => import('./demo06-grid/demo06-grid.module').then( m => m.Demo06GridPageModule)
  },
  {
    path: 'demo07',
    loadChildren: () => import('./demo07/demo07.module').then( m => m.Demo07PageModule)
  },
  {
    path: 'demo08-windows',
    loadChildren: () => import('./demo08-windows/demo08-windows.module').then( m => m.Demo08WindowsPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  
  {
    path: 'demo10',
    loadChildren: () => import('./demo10-scroll/demo10-scroll.module').then( m => m.Demo10ScrollPageModule)
  },
  {
    path: 'demo12',
    loadChildren: () => import('./demo12-tabs/demo12-tabs.module').then( m => m.Demo12TabsPageModule)
  },
  {
    path: 'demo14-cart',
    loadChildren: () => import('./demo14-cart/demo14-cart.module').then( m => m.Demo14CartPageModule)
  },
  {
    path: 'submit',
    loadChildren: () => import('./demo14-submit/demo14-submit.module').then( m => m.Demo14SubmitPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
