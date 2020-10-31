import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const pagesDeclarations = [
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
];

const routes: Routes = [
  { path: '', component: NotificationsPage },

  { path: 'communities-notifications', component: CommunitiesNotificationsComponent },

  { path: 'new-post', component: NewPostComponent },
  { path: 'closed-community-posts', component: ClosedCommunityPostsComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'aplications', component: AplicationsComponent },
  { path: 'live-streams', component: LiveStreamsComponent },
  { path: 'podcasts', component: PodcastsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'store', component: StoreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsPageRoutingModule { }
