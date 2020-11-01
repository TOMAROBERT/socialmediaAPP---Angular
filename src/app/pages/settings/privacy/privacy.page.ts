import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

  types: any[] = [
    {
      id: 'my_profile',
      pages: [
        { id: 'profile', link: 'profile' },
        { id: 'photos_with', link: 'photos-with' },
        { id: 'photos_saved', link: 'photos-saved' },
        { id: 'audios', link: 'audios' },
        { id: 'gifts', link: 'gifts' },
        { id: 'places', link: 'places' },
        { id: 'friends', link: 'friends' },
        { id: 'hidden_friends', link: 'hidden-friends' }
      ]
    },
    {
      id: 'my_posts',
      pages: [
      ]
    },
    {
      id: 'who_can_contact_me',
      pages: [
      ]
    },
    {
      id: 'other',
      pages: [
      ]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
