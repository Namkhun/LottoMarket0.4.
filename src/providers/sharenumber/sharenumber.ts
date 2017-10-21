import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SharenumberProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello SharenumberProvider Provider');
  }

  getShareNumbers() {
    return this.afd.list('/shareNumbers/');
  }
  

  // lottoCount: number;
  // numberLotto: Array<Lo>;
 
  // getnumberLotto(): Array<Lotto> {
  //   return this.numberLotto;
  // }
  // pushLotto(numberLotto) {
  //   numberLotto.toString();
  //   this.[numberLotto.lottoCount].id++;
  //   this.numberLotto[this.lottoCount].numberLotto = numberLotto;
    
  //   this.lottoCount++;
  // }
  
}
