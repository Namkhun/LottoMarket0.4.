import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ReplyPostNumberProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello ReplyPostNumberProvider Provider');
  }

  getReplyPostNumbers() {
    return this.afd.list('/replyPostNumber');
  }

}
