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



  }

}
