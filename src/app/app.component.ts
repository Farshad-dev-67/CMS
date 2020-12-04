import {Component, OnInit} from '@angular/core';
import {TranslationService} from './modules/i18n/translation.service';
import { locale as enLang } from './modules/i18n/vocabs/en';
import { locale as chLang } from './modules/i18n/vocabs/ch';
import { locale as esLang } from './modules/i18n/vocabs/es';
import { locale as jpLang } from './modules/i18n/vocabs/jp';
import { locale as deLang } from './modules/i18n/vocabs/de';
import { locale as frLang } from './modules/i18n/vocabs/fr';
import { locale as faLang } from './modules/i18n/vocabs/fa';
import {CoreAuthService, EnumDeviceType, EnumOperatingSystemType, TokenDeviceClientInfoDtoModel} from 'ntk-cms-api';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private coreAuthService: CoreAuthService,
    private translationService: TranslationService) {
    if (environment.cmsServerConfig.configApiServerPath && environment.cmsServerConfig.configApiServerPath.length > 0) {
      this.coreAuthService.setConfig(environment.cmsServerConfig.configApiServerPath);
    }
    this.translationService.loadTranslations(
      faLang,
      enLang,
      chLang,
      esLang,
      jpLang,
      deLang,
      frLang,
    );
  }

  ngOnInit(): void {
    const DeviceToken = this.coreAuthService.getDeviceToken();
    if (!DeviceToken || DeviceToken.length === 0) {
      const model: TokenDeviceClientInfoDtoModel = {
        SecurityKey: environment.cmsTokenConfig.SecurityKey,
        ClientMACAddress: '',
        OSType: EnumOperatingSystemType.none,
        DeviceType: EnumDeviceType.WebSite,
        PackageName: '',
        AppBuildVer: 0,
        AppSourceVer: '',
        Country: '',
        DeviceBrand: '',
        Language: '',
        LocationLat: '',
        LocationLong: '',
        SimCard: '',
        NotificationId: ''

      };
      this.coreAuthService.ServiceGetTokenDevice(model).toPromise();
    }
  }
}
