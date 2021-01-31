import {Component, OnInit, OnDestroy} from '@angular/core';
import { MenuController, ModalController, AnimationController } from '@ionic/angular';
import { Howl } from 'howler';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {
  tabs: any[] = [
    { id: 'news', badge: 0, icon: 'reader-outline' },
    { id: 'messages', badge: 0, icon: 'chatbubble-outline' },
    { id: 'explore', badge: 0, icon: 'compass-outline' }
  ];
  activeTab = '';

  player: Howl = null;
  isPlaying = false;
  progress = 0;


  constructor(
    private menu: MenuController,
    private animationCtrl: AnimationController,
    private modalController: ModalController
  ) { }

 
  tabChanged(event) {
    this.activeTab = event.tab;
  }

  tabClicked(tab) {
    if (this.activeTab === tab.id) {
    }
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
