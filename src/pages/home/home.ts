import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {StorageKeys} from "../../app/app.component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public static mBudget: number = 0;
  public static monthlyExpenses: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage) {

    this.storage.get(StorageKeys.MONTHLY_BUDGET).then(value => {
      HomePage.mBudget = value;
    });

    this.storage.get(StorageKeys.MONTHLY_EXPENSES).then(value => {
      HomePage.monthlyExpenses = value;
    });
  }

  ionViewDidLoad() {

  }

  get monthlyBudget() {
    return HomePage.mBudget;
  }

  get theMonthlyExpenses() {
    return HomePage.monthlyExpenses;
  }
}
