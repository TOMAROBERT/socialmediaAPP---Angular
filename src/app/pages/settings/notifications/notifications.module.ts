import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsPageRoutingModule } from './notifications-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { NotificationsPage } from './notifications.page';

import { PrivateMessagesComponent } from './messages/private-messages/private-messages.component';
import { GroupChatsComponent } from './messages/group-chats/group-chats.component';
import { CommunityMessagesComponent } from './messages/community-messages/community-messages.component';

import { CommunitiesNotificationsComponent } from './sources/communities-notifications/communities-notifications.component';

import { LikesComponent } from './feedback/likes/likes.component';
import { SharedComponent } from './feedback/shared/shared.component';
import { CommentsComponent } from './feedback/comments/comments.component';
import { AlsoCommentedComponent } from './feedback/also-commented/also-commented.component';
import { MentionsComponent } from './feedback/mentions/mentions.component';
import { MentionsMessagesComponent } from './feedback/mentions-messages/mentions-messages.component';
import { PostsComponent } from './feedback/posts/posts.component';
import { RelatedYouComponent } from './feedback/related-you/related-you.component';
import { ParticipationPollsComponent } from './feedback/participation-polls/participation-polls.component';

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

    SharedModule,
  ],
  declarations: [
    NotificationsPage,

    PrivateMessagesComponent,
    GroupChatsComponent,
    CommunityMessagesComponent,

    CommunitiesNotificationsComponent,

    LikesComponent,
    SharedComponent,
    CommentsComponent,
    AlsoCommentedComponent,
    MentionsComponent,
    MentionsMessagesComponent,
    PostsComponent,
    RelatedYouComponent,
    ParticipationPollsComponent,
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
