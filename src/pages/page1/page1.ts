import { Component,ViewChild  } from '@angular/core';
import { NavController,Slides  } from 'ionic-angular';
import { Page3Page } from '../page3/page3';
import { Page2Page } from '../page2/page2';
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  constructor(public navCtrl: NavController) {
  }
  @ViewChild(Slides) slides: Slides;
  
    goToSlide() {
      this.slides.slideTo(2, 500);
    }
  
    goToPage3() {
      this.navCtrl.setRoot(Page3Page);
    }
    goToPage2() {
      this.navCtrl.setRoot(Page2Page);
    }
}
