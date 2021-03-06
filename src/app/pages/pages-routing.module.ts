import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './_layout/layout.component';
import {AsideResolver} from './_layout/components/aside/aside.resolver';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // resolve: {menuList: AsideResolver},
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'site',
        loadChildren: () =>
          import('../pages/core/site/site.module').then(
            (m) => m.SiteModule
          ),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('../pages/news/news.module').then(m => m.NewsModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
