import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import {CategoryModule} from '../category/category.module';


@NgModule({
  declarations: [ContentComponent],
    imports: [
        CommonModule,
        ContentRoutingModule,
        CategoryModule
    ]
})
export class ContentModule { }
