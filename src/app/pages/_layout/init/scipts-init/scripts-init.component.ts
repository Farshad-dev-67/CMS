import {Component, OnInit, AfterViewInit} from '@angular/core';
import {KTUtil} from '../../../../../assets/js/components/util.js';
import KTLayoutAsideToggle from '../../../../../assets/js/layout/base/aside-toggle.js';
import KTLayoutStickyCard from '../../../../../assets/js/layout/base/sticky-card.js';
import KTLayoutStretchedCard from '../../../../../assets/js/layout/base/stretched-card.js';
import {LayoutService} from '../../../../_metronic/core';
import KTLayoutBrand from '../../../../../assets/js/layout/base/brand.js';
import KTLayoutAside from '../../../../../assets/js/layout/base/aside.js';
import KTLayoutAsideMenu from '../../../../../assets/js/layout/base/aside-menu.js';

@Component({
  selector: 'app-scripts-init',
  templateUrl: './scripts-init.component.html',
})
export class ScriptsInitComponent implements OnInit, AfterViewInit {
  asideSelfMinimizeToggle = false;

  constructor(private layout: LayoutService) {
  }

  ngOnInit(): void {
    this.asideSelfMinimizeToggle = this.layout.getProp(
      'aside.self.minimize.toggle'
    );
  }

  ngAfterViewInit(): void {
    KTUtil.ready(() => {
      // Init Brand Panel For Logo
      KTLayoutBrand.init('kt_brand');
      // Init Aside
      KTLayoutAside.init('kt_aside');
      // Init Aside Menu
      KTLayoutAsideMenu.init('kt_aside_menu');
      if (this.asideSelfMinimizeToggle) {
        // Init Aside Menu Toggle
        KTLayoutAsideToggle.init('kt_aside_toggle');
      }
      // Init Sticky Card
      KTLayoutStickyCard.init('kt_page_sticky_card');
      // Init Stretched Card
      KTLayoutStretchedCard.init('kt_page_stretched_card');
    });
  }
}
