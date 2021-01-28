import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Config, MenuController, ModalController } from '@ionic/angular';


import { AppData } from '../../providers/app-data';
// import { FakerService } from '../../services/faker/faker.service';
import Post from './../../model/Post'

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss']
})
export class NewsPage implements OnInit {
  theme:string = "light";
  posts: Post[] = [];
  activeSegment: FormControl = new FormControl('news');
  segments: any[] = [
    { title: 'News', value: 'news' }
  ];
  isIos: boolean;

  constructor(
    private config: Config,
    private menu: MenuController,
    private modalController: ModalController,
    private router: Router,
    private route: ActivatedRoute,

    private appData: AppData,
  ) {
    const tabParam = this.route.snapshot.queryParamMap.get('tab');
    if (this.segments.findIndex(x => x.value === tabParam) >= 0) {
      this.activeSegment.setValue(tabParam);
    }
  }

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

  async dataInit() {
     this.posts = await this.appData.getPosts();
  }

  ngOnInit(): void {
    this.isIos = this.config.get('mode') === 'ios';
    this.dataInit();
  }

  toggleHead(){
    // console.log('am apasat pe toggle');
    var element = document.getElementById("toggled");
    element.classList.toggle("d-none");
  }

  switchTheme(){
    if(this.theme=="light"){
      document.body.classList.add("dark");
      this.theme="dark";
    }else{
      document.body.classList.remove("dark");
      this.theme="light";
    }
  }
}
