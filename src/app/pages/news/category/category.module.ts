import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryComponent} from './category.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CategoryResolver} from './category.resolver';
import {NewsCategoryService} from 'ntk-cms-api';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [
    CategoryResolver,
    NewsCategoryService
  ]
})
export class CategoryModule {
}
