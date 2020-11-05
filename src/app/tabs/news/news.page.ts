import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Config, MenuController, ModalController } from '@ionic/angular';


import { AppData } from '../../providers/app-data';
import { FakerService } from '../../services/faker/faker.service';


@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss']
})
export class NewsPage implements OnInit {
  posts: any[] = [];
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
    this.faker.getFaker().then((faker) => {
      // generate posts
      this.posts = Array.apply(null, Array(15)).map(() => {
        return {
          id: faker.random.uuid(),
          first_name: faker.name.findName().split(' ')[0],
          last_name: faker.name.lastName(),
          image: faker.image.avatar(),
          content: faker.lorem.sentences(),
          likes: faker.random.number(100),
          comments: faker.random.number(100),
          shared: faker.random.number(100)
        };
      });
    });

    // this.posts = await this.appData.getPosts();
  }

  ngOnInit(): void {
    this.isIos = this.config.get('mode') === 'ios';
    this.dataInit();
  }

  likesColor() {
    console.log('am apasat pe like');
  }
  comColor() {
    console.log('am apasat pe comm');
  }
  shareColor() {
    console.log('am apasat pe share');
  }
  
}
