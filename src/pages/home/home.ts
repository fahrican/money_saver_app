import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public mBudget: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage)
  {

    this.storage.get('budget').then(value => {
      this.mBudget = value;
    });
  }

  /*ionViewDidEnter(){

    this.storage.get('budget').then((val) => {
      this.mBudget = val;
    });
  }*/


}
