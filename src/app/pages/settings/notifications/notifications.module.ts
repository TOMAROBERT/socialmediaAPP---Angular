import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsPageRoutingModule } from './notifications-routing.module';

import { NotificationsPage } from './notifications.page';

import { CommunitiesNotificationsComponent } from './sources/communities-notifications/communities-notifications.component';


import { NewPostComponent } from './other/new-post/new-post.component';
import { ClosedCommunityPostsComponent } from './other/closed-community-posts/closed-community-posts.component';
import { GiftsComponent } from './other/gifts/gifts.component';
import { AplicationsComponent } from './other/aplications/aplications.component';
import { LiveStreamsComponent } from './other/live-streams/live-streams.component';
import { PodcastsComponent } from './other/podcasts/podcasts.component';
import { AchievementsComponent } from './other/achievements/achievements.component';
import { ServicesComponent } from './other/services/services.component';
import { BookmarksComponent } from './other/bookmarks/bookmarks.component';
import { StoreComponent } from './other/store/store.component';

@NgModule({
  imports: [
    CommonModule,
    NotificationsPageRoutingModule,
  ],
  declarations: [
    NotificationsPage,

    CommunitiesNotificationsComponent,

    NewPostComponent,
    ClosedCommunityPostsComponent,
    GiftsComponent,
    AplicationsComponent,
    LiveStreamsComponent,
    PodcastsComponent,
    AchievementsComponent,
    ServicesComponent,
    BookmarksComponent,
    StoreComponent
  ]
})
export class NotificationsPageModule { }
