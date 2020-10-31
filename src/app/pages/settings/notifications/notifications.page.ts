import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  pages = [
    {
      id: 'messages_title',
      pages: [
        { id: 'private_messages', icon: 'chatbubble', color: 'medium', link: 'private-messages' },
      ]
    },
    {
      id: 'sources_of_notifications',
      pages: [
        { id: 'communities_notifications', icon: 'person', color: 'primary', link: 'communities-notifications' }
      ]
    },
    {
      id: 'feedback',
      pages: [
        { id: 'shared', icon: 'arrow-redo', color: 'success', link: 'shared' },
      ]
    },
    {
      id: 'events',
      pages: [
        { id: 'friend_requests', icon: 'add', color: 'primary', link: 'friend-requests' },
        { id: 'community_invitations', icon: 'mail', color: 'primary', link: 'community-invitations' },
      ]
    },
    {
      id: 'other',
      pages: [
        { id: 'new_post', icon: 'podium', color: 'warning', link: 'new-post' },
        { id: 'closed_community_posts', icon: 'podium', color: 'dark', link: 'closed-community-posts' },
        { id: 'gifts', icon: 'gift', color: 'warning', link: 'gifts' },
        { id: 'aplications', icon: 'game-controller', color: 'primary', link: 'aplications' },
        { id: 'live_streams', icon: 'videocam', color: 'danger', link: 'live-streams' },
        { id: 'podcasts', icon: 'headset', color: 'danger', link: 'podcasts' },
        { id: 'achievements', icon: 'layers', color: 'primary', link: 'achievements' },
        { id: 'services', icon: 'grid', color: 'primary', link: 'services' },
        { id: 'bookmarks', icon: 'bookmark', color: 'warning', link: 'bookmarks' },
        { id: 'store', icon: 'cube', color: 'primary', link: 'store' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
