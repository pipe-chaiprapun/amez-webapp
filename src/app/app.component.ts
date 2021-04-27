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
  prop1 = '/assets/Images/properties/prop1.png';
  prop2 = '/assets/Images/properties/prop2.png';
  prop3 = '/assets/Images/properties/prop3.png';
  prop4 = '/assets/Images/properties/prop4.png';
  btnCheck = '/assets/Images/contact/checkPrice.png';
  btnAsk = '/assets/Images/contact/askBtn2.png';
  btnLine = '/assets/Images/contact/addLineBtn.png';
  btnPrice1 = 'assets/Images/productPrice/price1.png';
  btnPrice2 = 'assets/Images/productPrice/price2.png';
  btnPromo1 = '/assets/Images/promotion/price1.png';
  btnPromo2 = '/assets/Images/promotion/price2.png';
  btnPromo3 = '/assets/Images/promotion/price3.png';

  roller = true;
  serum = true;

  ngOnInit() {
    this.initJquery();

  }

  initJquery() {
    $('.marquee').marquee({
      duration: 20000,
      gap: 500,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true
    });
    $('.carousel').carousel({ interval: 3000 });
    $('#prop1').hover(() => {
      this.prop1 = '/assets/Images/properties/prop12.png';
    }, () => { this.prop1 = '/assets/Images/properties/prop1.png'; });
    $('#prop2').hover(() => {
      this.prop2 = '/assets/Images/properties/prop22.png';
    }, () => { this.prop2 = '/assets/Images/properties/prop2.png'; });
    $('#prop3').hover(() => {
      this.prop3 = '/assets/Images/properties/prop32.png';
    }, () => { this.prop3 = '/assets/Images/properties/prop3.png'; });
    $('#prop4').hover(() => {
      this.prop4 = '/assets/Images/properties/prop42.png';
    }, () => { this.prop4 = '/assets/Images/properties/prop4.png'; });
    $('#btn-check').hover(() => {
      this.btnCheck = '/assets/Images/contact/clickBtn.png';
    }, () => { this.btnCheck = '/assets/Images/contact/checkPrice.png'; });
    $('#btn-ask').hover(() => {
      this.btnAsk = '/assets/Images/contact/clickBtn.png';
    }, () => { this.btnAsk = '/assets/Images/contact/askBtn2.png'; });
    $('#btn-line').hover(() => {
      this.btnLine = '/assets/Images/contact/askBtn.png';
    }, () => { this.btnLine = '/assets/Images/contact/addLineBtn.png'; });
    $('#product-price1').hover(() => {
      this.btnPrice1 = 'assets/Images/productPrice/price3.png';
    }, () => { this.btnPrice1 = 'assets/Images/productPrice/price1.png'; });
    $('#product-price2').hover(() => {
      this.btnPrice2 = 'assets/Images/productPrice/price3.png';
    }, () => { this.btnPrice2 = 'assets/Images/productPrice/price2.png'; });
    $('#btn-promo1').hover(() => {
      this.btnPromo1 = '/assets/Images/promotion/price4.png';
    }, () => { this.btnPromo1 = '/assets/Images/promotion/price1.png'; });
    $('#btn-promo2').hover(() => {
      this.btnPromo2 = '/assets/Images/promotion/price4.png';
    }, () => { this.btnPromo2 = '/assets/Images/promotion/price2.png'; });
    $('#btn-promo3').hover(() => {
      this.btnPromo3 = '/assets/Images/promotion/price4.png';
    }, () => { this.btnPromo3 = '/assets/Images/promotion/price3.png'; });

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 450) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    $('.scroll-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

  }

  gotoStep() {
    // console.log('go')
    // $('#step-section').animate({ scrollTop: 0 }, 'slow');
    $('html, body').animate({
      scrollTop: $('#step-section').offset().top
    }, 1500);
  }
  gotoPromotion() {
    $('html, body').animate({
      scrollTop: $('#promotion-section').offset().top
    }, 1500);
  }
  gotoContact() {
    $('html, body').animate({
      scrollTop: $('#contact-section').offset().top
    }, 1500);
  }

  changeRollerImg() {
    this.roller = !this.roller;
    this.rollerImg = this.roller ? '/assets/Images/step/roller1.png' : '/assets/Images/step/roller2.png';
    // const image = new Image();
    // image.id = '#roller';
    // image.src = this.roller ? '/assets/Images/step/roller1.png' : '/assets/Images/step/roller2.png';
    // // image.onload = () => {
    // //   $('#roller').fadeOut(1000, () => {
    // //     this.rollerImg = this.roller ? '/assets/Images/step/roller1.png' : '/assets/Images/step/roller2.png';
    // //   }).fadeIn(1000);
    // // };

    // $('#roller').fadeOut(1000, () => {
    //   this.rollerImg = this.roller ? '/assets/Images/step/roller1.png' : '/assets/Images/step/roller2.png';
    //   $('#roller').on('load', () => {
    //     console.log('loaded');
    //   }).fadeIn(1000);
    // });


    // $('#roller').fadeOut(1000, () => {
    //   this.rollerImg = this.roller ? '/assets/Images/step/roller1.png' : '/assets/Images/step/roller2.png';
    // }).fadeIn(1000);
  }
  changeSerumImg() {
    this.serum = !this.serum;
    this.serumImg = this.serum ? '/assets/Images/step/serum1.png' : '/assets/Images/step/serum2.png';
    // $('#serum').fadeOut(1000, () => {
    //   this.serumImg = this.serum ? '/assets/Images/step/serum1.png' : '/assets/Images/step/serum2.png';
    // }).fadeIn(1000);
  }
}
