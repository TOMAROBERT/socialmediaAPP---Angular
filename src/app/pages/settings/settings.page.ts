import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settings: any[] = [
    { id: 'notifications', icon: 'notifications-outline', link: 'notifications' },
    { id: 'privacy', icon: 'hand-left-outline', link: 'privacy' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
