import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public mBudget;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage) {

    this.mBudget = navParams.get('budget');

    this.storage.set('budget', this.mBudget).then(value => {
      console.log(value);
    });
  }

  getStorageValue(){
    this.storage.get('budget').then(value => {
      this.mBudget = value;
      console.log(this.mBudget);
    });

  }

}
