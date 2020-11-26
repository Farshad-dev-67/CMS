import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {LayoutModule} from '../layout.module';
import {TranslationService} from '../../modules/i18n/translation.service';
import {TranslateCompiler, TranslateLoader, TranslateService, TranslateStore} from '@ngx-translate/core';


@NgModule({
  declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        LayoutModule
    ],
  providers: [
    TranslationService,
    TranslateService,
  ]
})
export class DashboardModule { }
