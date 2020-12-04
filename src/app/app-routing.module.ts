import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CmsAuthGuard} from './_helpers/guard/cmsAuthGuard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        canActivate: [CmsAuthGuard],
        loadChildren: () => import('./pages/dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
