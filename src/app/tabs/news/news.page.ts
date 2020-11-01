import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { SubscriptionLike } from 'rxjs';
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
    { title: 'News', value: 'news' },
    { title: 'Discover', value: 'discover' }
  ];

  activeDiscover: FormControl = new FormControl('for_you');
  discoverCategories: any[] = [
    { id: 'for_you' },
    { id: 'games' },
    { id: 'sports' },
    { id: 'it' },
    { id: 'photos' },
    { id: 'movies' },
    { id: 'travel' }
  ];
  discavery = [];

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

      // generate discavery
      const discaveryTypes = ['image', 'post-image', 'post-full'];
      for (let index = 0; index < discaveryTypes.length; index++) {
        this.discavery.push({
          type: discaveryTypes[index],
          data: []
        });

        if (discaveryTypes[index] === 'image') {
          this.discavery[index].data = Array.apply(null, Array(2)).map(() => {
            return {
              id: faker.random.uuid(),
              img: faker.random.arrayElement([faker.image.people(), faker.image.food()])
            };
          });
        }

        if (discaveryTypes[index] === 'post-image') {
          this.discavery[index].data = Array.apply(null, Array(2)).map(() => {
            return {
              id: faker.random.uuid(),
              avatar: faker.image.avatar(),
              author: faker.company.companyName(),
              img: faker.random.arrayElement([faker.image.technics(), faker.image.sports()])
            };
          });
        }

        if (discaveryTypes[index] === 'post-full') {
          this.discavery[index].data = Array.apply(null, Array(4)).map(() => {
            return {
              id: faker.random.uuid(),
              avatar: faker.image.avatar(),
              author: faker.company.companyName(),
              img: faker.random.arrayElement([faker.image.transport(), faker.image.city(), faker.image.nightlife(), faker.image.image()]),
              text: faker.lorem.sentences(2)
            };
          });
        }
      }
    });

    // this.posts = await this.appData.getPosts();
    // this.discavery = await this.appData.getDiscavery();
  }

  ngOnInit(): void {
    this.isIos = this.config.get('mode') === 'ios';
    this.dataInit();
  }
}
