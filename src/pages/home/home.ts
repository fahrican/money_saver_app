import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public mBudget: number = 0;
  public testVal;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage)
  {

    this.testVal = navParams.get('budget');
    /*
    if (!this.testVal) {
      this.testVal = 0;
    }
    this.getStorageValue();
    this.setStorageValue();*/
    this.storage.get('budget').then(value => {
      this.mBudget = value;
    });
  }


  ionViewDidEnter(){

    this.storage.get('budget').then((val) => {
      this.mBudget = val;
    });
  }

  /*
  get staticBudget() {
    return HomePage.mBudget;
  }

  setStorageValue(){

    this.storage.set('budget', this.testVal).then(value => {

      HomePage.mBudget = value;
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
  } */

  getTest(){
    this.storage.get('budget').then((val) => {
      this.mBudget = val;
    });
  }

}
