import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { usercreds } from '../../models/interfaces/usercreds';
import { Page1Page } from '../page1/page1';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  passwordreset() {
    this.navCtrl.push('PasswordresetPage');
  }
  signin() {
    this.authservice.login(this.credentials)
        .then(auth => {
          this.navCtrl.setRoot(Page1Page);
        })
        .catch(err => {
          // Handle error
          let toast = this.toastCtrl.create({
            message: 'E-mail หรือ รหัสผ่านไม่ถูกต้อง',
            duration: 1000
          });
          toast.present();
        });
    }
    goToPage1() {
      this.navCtrl.setRoot(Page1Page);
    }
  
  
}
