import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Config, MenuController, ModalController } from '@ionic/angular';


import { AppData } from '../../providers/app-data';
import { FakerService } from '../../services/faker/faker.service';
import Post from './../../model/Post'

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss']
})
export class NewsPage implements OnInit {
  posts: Post[] = [];
  // posts: any[] = [];
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
    private faker: FakerService,
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
}
