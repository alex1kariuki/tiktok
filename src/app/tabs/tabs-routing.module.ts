import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../pages/discover/discover.module').then(m => m.DiscoverPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../pages/upload/upload.module').then(m => m.UploadPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../pages/inbox/inbox.module').then(m => m.InboxPageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../pages/me/me.module').then(m => m.MePageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
