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
  rollerImg = '/assets/Images/step/roller1.png';
  serumImg = '/assets/Images/step/serum1.png';

  roller = true;
  serum = true;

  ngOnInit() {
    $('.marquee').marquee({
      duration: 20000,
      gap: 500,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true
    });
  }

  changeRollerImg() {
    this.roller = !this.roller;

    // if (this.roller) {
    //   $('#roller2').fadeOut(500, () => {
    //     $('#roller1').fadeIn(500);
    //   });
    // } else {
    //   $('#roller1').fadeOut(500, () => {
    //     $('#roller2').fadeIn(500);
    //   });
    // }
    $('#roller').fadeOut(1000, () => {
      this.rollerImg = this.roller ? '/assets/Images/step/roller1.png' : '/assets/Images/step/roller2.png';
    }).fadeIn(1000);
  }
  changeSerumImg() {
    this.serum = !this.serum;
    $('#serum').fadeOut(1000, () => {
      this.serumImg = this.serum ? '/assets/Images/step/serum1.png' : '/assets/Images/step/serum2.png';
    }).fadeIn(1000);
  }
}
