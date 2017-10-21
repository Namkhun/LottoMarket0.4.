import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { UserProvider } from '../../providers/user/user';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  avatar: string;
  displayName: string;
  email:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: UserProvider, public zone: NgZone, public alertCtrl: AlertController,
    public imghandler: ImghandlerProvider) {
  }

  ionViewWillEnter() {
    this.loaduserdetails();
  }

  loaduserdetails() {
    this.userservice.getuserdetails().then((res: any) => {
      this.displayName = res.displayName;
      this.email = res.email;
      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })
  }

  editimage() {
      const alert = this.alertCtrl.create({
      buttons: ['okay']
    });
    this.imghandler.uploadimage().then((url: any) => {
      this.userservice.updateimage(url).then((res: any) => {
        if (res.success) {
          ({
            title: 'Updated',
            subTitle: 'Your profile pic has been changed successfully!!',
           
          });
          alert.present();
          this.zone.run(() => {
          this.avatar = url;
        })  
        }  
      }).catch((err) => {
        ({
          title: 'Failed',
          subTitle: 'Your profile pic was not changed',
         
        });
        alert.present();
          
      })
      })
  }

  editname() {
    let alert = this.alertCtrl.create({
      title: 'Edit Nickname',
      inputs: [{
        name: 'nickname',
        placeholder: 'Nickname'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.nickname) {
            this.userservice.updatedisplayname(data.nickname).then((res: any) => {
              if (res.success) {
                let alert = this.alertCtrl.create ({
                  title: 'Updated',
                  subTitle: 'Your nickname has been changed successfully!!', 
                  buttons: ['okay']               
                });
                alert.present();                
                this.zone.run(() => {
                  this.displayName = data.nickname;
                })
              }

              else {
                let alert = this.alertCtrl.create ({
                  title: 'Failed',
                  subTitle: 'Your nickname was not changed',   
                  buttons: ['okay']             
                });
                alert.present(); 
              }        
            })
          }
        }
        
      }]
    });
    alert.present();
  }
  logout() {
    firebase.auth().signOut().then(() => {
      this.navCtrl.setRoot('LoginPage');
    })
  }
}
