import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PostnumberProvider {
  userId : any;
  key : any;
  firedata = firebase.database().ref('/users');
  fire = firebase.database().ref('/postNumbers');
  constructor(public afd: AngularFireDatabase) {
    console.log('Hello PostnumberProvider Provider');
    
  }

  getPostNumbers() {
    return this.afd.list('/postNumbers');
  }
  
  getuserpostdetails() {
    
    this.userId = firebase.database().ref().child('/postNumbers').push().key 
}
getallPost() {
  var promise = new Promise((resolve, reject) => {
    this.firedata.orderByChild('key').once('value', (snapshot) => {
      let postNumbers = snapshot.val();
      let temparr = [];
      for (var key in postNumbers) {
        temparr.push(postNumbers[key]);
      }
      resolve(temparr);
    }).catch((err) => {
      reject(err);
    })
  })
  return promise;
}
getpostnumdetail() {
  return this.afd.list('/postNumbers');
    
}
  getpostdetail(){
    return this.afd.list('/postNumbers');
  }

  getpost(keyid) {
    var promise = new Promise((resolve, reject) => {

      this.fire.child(localStorage.getItem('keyid')).once('value', (snapshot) => {
        let postNumber = snapshot.val();
        let temparrs = [];
        for ( keyid in postNumber) {
          
          temparrs.push(postNumber);
        }
        resolve(temparrs);
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
   }
        
  }



