import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private translate: TranslateService,

  ) {
    this.initializeApp();
  }

  /** * App init */
  initializeApp() {
    this.translate.setDefaultLang('en');
  }


  ngOnInit() { }
}
