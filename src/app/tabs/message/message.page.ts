import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config } from '@ionic/angular';

import { AppData } from 'src/app/providers/app-data';

@Component({
  selector: 'app-message',
  templateUrl: 'message.page.html',
  styleUrls: ['message.page.scss']
})
export class MessagePage implements OnInit {
  messagesUser: any[];
  searchMessageList: FormControl = new FormControl('');
  showSearchbar = false;
  isIos = false;

  constructor(
    public config: Config,

    private appData: AppData
  ) { }

  /**
   * On refresh
   */
  doRefresh(event) {
    this.dataInit();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  /**
   * Data init
   */
  async dataInit() {
    
      this.messagesUser = Array.apply(null, Array(25)).map(() => {
        return {};
      });
    this.messagesUser = await this.appData.getMessagesUser();
  }

  ngOnInit(): void {
    this.isIos = this.config.get('mode') === 'ios';

    this.dataInit();
  }
}
