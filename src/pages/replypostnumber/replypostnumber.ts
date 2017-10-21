import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostnumberProvider } from '../../providers/postnumber/postnumber';
import { AngularFireList } from 'angularfire2/database';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the ReplypostnumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-replypostnumber',
  templateUrl: 'replypostnumber.html',
})
export class ReplypostnumberPage {
  user: string;
  number: string;
  provine: string;
  posts: any;
  postNumbers: AngularFireList<any>;
  postkey: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public postNumberProvider: PostnumberProvider, public userservice: UserProvider, ) {
    this.postkey = localStorage.getItem('keyid');
    this.postNumberProvider.getpost(this.postkey).then((data)=>{  
      
      for(var key in data){  
        console.log(data[key]);
        this.user = data[key]['user'];
        this.provine = data[key]['provine'];
        this.number = data[key]['number'];
      }
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReplypostnumberPage');
    //console.log(this.postNumberProvider.firedata);
    
  }
ionViewWillEnter() {
console.log(this.postkey);
      this.postNumberProvider.getpost(this.postkey).then((data)=>{
        for(var key in data){
          
          console.log(data[key]);
          //temparr.push(postNumbers);
        }
        
        
      });
      
  }

}


