import { Component, OnInit } from '@angular/core';
declare const bootstrap;
declare const $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AMEZ';

  ngOnInit() {
    $('.marquee').marquee({
      duration: 20000,
      gap: 500,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true
    });

  }
}
