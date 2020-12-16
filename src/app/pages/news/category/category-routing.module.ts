import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CategoryComponent} from './category.component';
import {CategoryResolver} from './category.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {categoryList: CategoryResolver},
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
