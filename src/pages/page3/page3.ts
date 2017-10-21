import { Component, NgZone } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { SharenumberProvider } from './../../providers/sharenumber/sharenumber'
import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Injectable } from '@angular/core';
// import { FirebaseListObservabel} from 'angularfire2/database';
 import { UserProvider } from "../../providers/user/user";
// import { Subscription } from 'rxjs';
// import { Headers, Http, Response } from "@angular/http";
//import { ItemsService } from '../items.service';


@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'

})
export class Page3Page {
  shareNumbers: AngularFireList<any>;
  // private items:AngularFireList<any[]>;
  // private item:AngularFireList<any>;
  // private subscribe: any;
  //avatar: string;
 // displayName: string;

  constructor(public navCtrl: NavController,
    public zone: NgZone,
    public userservice: UserProvider,
    public alertCtrl: AlertController,
    public shareNumberProvider: SharenumberProvider,
    public af: AngularFireDatabase) {
    this.shareNumbers = this.shareNumberProvider.getShareNumbers();
    //this.shareNumbers = af.database('/shareNumbers');
    //this.shareNumbers = this.shareNumberProvider.();
  }
  
  slides = [
    {
      title: "คำชะโนด!",
      description: "",
      image: "assets/คำชะโนด.jpg",
    },
    {
      title: "คุณย่าเมืองทอง!",
      description: "",
      image: "assets/คุณย่าเมืองทอง.jpg",
    },
    {
      title: "ศาลเจ้าพ่อเสือบางเขน!",
      description: "",
      image: "assets/ศาลเจ้าพ่อเสือ.jpg",
    },

  ];



  addShareNumbers() {
    let prompt = this.alertCtrl.create({
      title: 'เลขเด็ดบอกต่อ',
      // message: "เลขที่ต้องการแชร์",
      inputs: [
        {
          name: 'lotto',
          placeholder: 'เลขเด็ด'
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
            this.shareNumbers.push({
              number: data.lotto
              //lotto: data.lotto = this.shareNumbers
            });
          }
        }
      ]
    });
    prompt.present();
  }
//   shareNumber(clave:string){
//   clave = clave.toLowerCase();

//   let promesa = new Promise ((resolve, reject)=>{
//     this.af.list('/shareNumber'+clave).Subscription(data=>{
//       console.log(data);

//       resolve();
//     })

//   });
//     return promesa;
// }

// getItems(num) {
//     this.items = this.af.database
//       .list('/items', { query: { shareNumber: num | 20} } )
//       .map( (arr) => { return arr.reverse() } ) as AngularFireList<any[]>;
//     return this.items;
//   }

//   getItem(id: string) {
//     this.item = this.af.database.object('/items/'+id);
//     this.item.subscribe(item => {
//         console.log(item);
//         return item;
//       });
//   }


}



