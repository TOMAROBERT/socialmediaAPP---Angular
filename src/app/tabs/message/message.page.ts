import {Component, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config, IonSearchbar } from '@ionic/angular';
// import { userInfo } from 'os';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


import { AppData } from 'src/app/providers/app-data';

export interface AppDataInterface {
  posts: any[];
  messagesUser: any[];
}

@Component({
  selector: 'app-message',
  templateUrl: 'message.page.html',
  styleUrls: ['message.page.scss']
})
export class MessagePage implements OnInit {
  @ViewChild('search',{static:false}) search :IonSearchbar;
  messagesUser: any[];
  searchMessageList: FormControl = new FormControl('');
  showSearchbar = false;
  isIos = false;
  data: AppDataInterface;

  // public messageUsers: Array<Object> = [];
  // private searchedItem: any; 
  constructor(
    public config: Config,
    private appData: AppData,
    public http: HttpClient 
  ) {}

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

  ionViewDidEnter(){
    setTimeout(() => {
      this.search.setFocus();
    })
  }

  load(): Promise<AppDataInterface> {
    if (this.data) { return of(this.data).toPromise(); }

    return this.http.get('assets/data/data.json').pipe(
        tap((data: AppDataInterface) => this.data = data)
    ).toPromise();
}

  _ionChange(event){
    console.log(event.detail.value);

    const val = event.target.value;

    this.messagesUser;
    if (val && val.trim() !=''){
      this.messagesUser = this.messagesUser.filter((user:any) => {
        return (user.first_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  
}
