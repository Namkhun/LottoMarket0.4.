import { Component, NgZone } from '@angular/core';
import { NavController, AlertController,NavParams } from 'ionic-angular';

import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

import { PostnumberProvider } from './../../providers/postnumber/postnumber';
import { UserProvider } from '../../providers/user/user';

import firebase from 'firebase';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2Page {
  avatar: string;
  displayName: string;
  postNumbers: AngularFireList<any>;
  posts: any;
  uid: string;
  keypost: string;
  number :string;
  firedata = firebase.database().ref('/users');
  postNumber = firebase.database().ref('/postNumbers');
  constructor(public navCtrl: NavController, public zone: NgZone,
    public alertCtrl: AlertController,
    public postNumberProvider: PostnumberProvider,
    public userservice: UserProvider,
    public af: AngularFireDatabase,
    public navParams: NavParams,
  ) {

    this.postNumbers = this.postNumberProvider.getPostNumbers();
    this.posts = this.postNumbers.snapshotChanges();
    //this.posts = af.list('/postNumbers').snapshotChanges();
    this.postNumbers = this.postNumberProvider.getpostdetail();
    console.log(this.posts);
  }

  // addPosts() {
  //   this.navCtrl.push(PostNumberPage);
  // }
  ionViewWillEnter() {
    this.loaduserdetails();
  }

  loaduserdetails() {
    this.userservice.getuserdetails().then((res: any) => {
      this.displayName = res.displayName;
      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })
  }

  addPostNumbers() {
    // this.userservice.getuserdetails().then((res: any) => {
    //   this.displayName = res.displayName;
    // })
    firebase.auth().currentUser.uid;
    let prompt = this.alertCtrl.create({
      title: 'สร้างโพสต์ค่ะ',
      message: "กรุณากรอกข้อมูลค่ะ",
      inputs: [
        {
          name: 'number',
          placeholder: 'เลขที่ต้องการ'
        }, {
          name: 'provine',
          placeholder: 'จังหวัด'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.postNumbers.push({

              number: data.number,
              provine: data.provine,
              user: data.user = this.displayName,
              uid: firebase.auth().currentUser.uid
            });
          }

        }
      ]
    });
    prompt.present();
  }
  goToReply(key) {
    this.navCtrl.push('ReplypostnumberPage' ,key)  
    localStorage.setItem('keyid',key);
    
    // this.postNumbers.push ({
    //   number: this.navParams.get('number'),
    //   provine:  this.navParams.get('provine'),
    //   user: this.navParams.get('user'),
    //   key: this.navParams.get('key')

    // })
  }
}

