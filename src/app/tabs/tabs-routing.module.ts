import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // Tab 1
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
          }
        ]
      },
      // Tab 2
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: () => import('./message/message.module').then(m => m.MessagePageModule)
          }
        ]
      },
      // Tab 3
      {
        path: 'explore',
        children: [
          {
            path: '',
            loadChildren: () => import('./explore/explore.module').then(m => m.ExplorePageModule)         }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
