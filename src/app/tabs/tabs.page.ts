import {Component, OnInit, OnDestroy} from '@angular/core';
import { MenuController, ModalController, AnimationController } from '@ionic/angular';
// import { SubscriptionLike } from 'rxjs';
// import { MusicModalEnterAnimation, MusicModalLeaveAnimation } from '../app.animations';

import { Howl } from 'howler';
import { MusicController, PlayerEventOptions, initialPlayerEventOptions } from '../services/music-controller/music-controller.service';
import { AppEventsService } from '../services/app-events/app-events.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {
  tabs: any[] = [
    { id: 'news', badge: 0, icon: 'reader-outline' },
    { id: 'messages', badge: 0, icon: 'chatbubble-outline' }
  ];
  activeTab = '';

  player: Howl = null;
  isPlaying = false;
  progress = 0;
  music: PlayerEventOptions = initialPlayerEventOptions;

  constructor(
    private appEvents: AppEventsService,
    private menu: MenuController,
    private animationCtrl: AnimationController,
    private modalController: ModalController,
    private musicController: MusicController
  ) { }

  /**
   * On tab change
   * check tab if profile tab or not
   */
  tabChanged(event) {
    this.activeTab = event.tab;
  }

  // /**
  //  * On tab click
  //  * Send event, if user click tab second time or more
  //  * @param {any} tab - tab object
  //  */
  tabClicked(tab) {
    if (this.activeTab === tab.id) {
      this.appEvents.tabClicks.next(tab);
    }
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
