import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public mBudget: number = 0;
  public testVal: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage) {

    this.testVal = navParams.get('budget');
    if (this.testVal == null) {
      this.testVal = 0;
    }
    this.getStorageValue();
    this.setStorageValue();
  }

  setStorageValue(){

    this.storage.set('budget', this.testVal).then(value => {

      this.mBudget = value;
      console.log(value);
    });
  }

  getStorageValue(): number {

    let temp: number = -1;
    this.storage.get('budget').then(value => {

      if (value == 0 || value === 0) {
        return 0;
      }
      temp = value;
      console.log(value);
    });
    return temp;
  }

}
