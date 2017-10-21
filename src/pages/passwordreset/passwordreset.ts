import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public userservice: UserProvider, public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
   // console.log('ionViewDidLoad PasswordresetPage');
  }
  reset() {
    this.userservice.passwordreset(this.email).then((res: any) => {
      if (res.success) {
        const alert = this.alertCtrl.create({
          title: 'ส่ง E-mail ',
          subTitle: 'ไปที่ E-mail ของท่านเพื่อรีเซ็ตรหัสผ่าน',
          buttons: ['OK'],
        });
        alert.present();
      }
    }).catch((err) => {
      const alert = this.alertCtrl.create({
        title: 'กรุณาใส่ E-mail',
        buttons: ['OK']
      });
      alert.present();
    })
  }


}

