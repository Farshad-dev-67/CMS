import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CoreAuthService} from 'ntk-cms-api';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {TranslateModule} from '@ngx-translate/core';
import {ToastrModule} from 'ngx-toastr';
import {SplashScreenModule} from './_metronic/partials/layout/splash-screen/splash-screen.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';

export function getHighlightLanguages(): any {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml},
    {name: 'json', func: json},
  ];
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 2000,
      enableHtml: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
    }),
    SplashScreenModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    HighlightModule,
    ClipboardModule,
  ],
  providers: [
    CoreAuthService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages,
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
