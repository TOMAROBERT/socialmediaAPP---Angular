import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, MenuController, LoadingController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { Store, select } from '@ngrx/store';
import { selectTheme } from './shared/ngrx/settings/settings.selectors';

import { TranslateService } from '@ngx-translate/core';
import { Observable, SubscriptionLike } from 'rxjs';
import { actionSettingsChangeTheme } from './shared/ngrx/settings/settings.actions';
import { FakerService } from './services/faker/faker.service';
import { AppEventsService } from './services/app-events/app-events.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme$: Observable<boolean>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,

    private router: Router,
    private translate: TranslateService,

    private store: Store,

    private fakerService: FakerService,

    private appEvents: AppEventsService,
    private menu: MenuController,
    public loadingController: LoadingController
  ) {
    this.initializeApp();
  }

  /** * App init */
  initializeApp() {
    this.translate.setDefaultLang('en');
    this.fakerService.setLang('en');
    this.theme$ = this.store.pipe(select(selectTheme));

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screenOrientation.unlock();
    });
  }

  /*** Theme toggle */
  async toggleDarkTheme() {
    const isDark = await this.store.pipe(select(selectTheme), take(1)).toPromise();
    this.store.dispatch(actionSettingsChangeTheme({ isDark: !isDark }));
  }

  ngOnInit() { }
}
