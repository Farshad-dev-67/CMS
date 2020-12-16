import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsComponent} from './news.component';
import {CategoryResolver} from './category/category.resolver';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: 'category',
        loadChildren: () =>
          import('./category/category.module').then(m => m.CategoryModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
