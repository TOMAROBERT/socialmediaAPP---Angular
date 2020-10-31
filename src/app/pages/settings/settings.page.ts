import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settings: any[] = [
    { id: 'notifications', icon: 'notifications-outline', link: 'notifications' },
    { id: 'general', icon: 'settings-outline', link: 'general' },
    { id: 'security', icon: 'lock-closed-outline', link: 'security' },
    { id: 'privacy', icon: 'hand-left-outline', link: 'privacy' },
    { id: 'subscriptions', icon: 'card-outline', link: 'subscriptions' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
