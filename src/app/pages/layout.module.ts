import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {LayoutComponent} from './_layout/layout.component';
import {ScriptsInitComponent} from './_layout/init/scipts-init/scripts-init.component';
import {AsideComponent} from './_layout/components/aside/aside.component';
import {AsideDynamicComponent} from './_layout/components/aside-dynamic/aside-dynamic.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgbDropdownModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../_metronic/core';
import {HeaderMenuComponent} from './_layout/components/header/header-menu/header-menu.component';
import {HeaderComponent} from './_layout/components/header/header.component';
import {HeaderMenuDynamicComponent} from './_layout/components/header/header-menu-dynamic/header-menu-dynamic.component';
import {TopbarComponent} from './_layout/components/topbar/topbar.component';
import {LanguageSelectorComponent} from './_layout/components/topbar/language-selector/language-selector.component';
import {HeaderMobileComponent} from './_layout/components/header-mobile/header-mobile.component';
import {ExtrasModule} from '../_metronic/partials/layout/extras/extras.module';


@NgModule({
  declarations: [
    LayoutComponent,
    ScriptsInitComponent,
    AsideComponent,
    AsideDynamicComponent,
    HeaderComponent,
    HeaderMenuComponent,
    HeaderMenuDynamicComponent,
    TopbarComponent,
    LanguageSelectorComponent,
    HeaderMobileComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    InlineSVGModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    ExtrasModule,
  ]
})
export class LayoutModule {
}
