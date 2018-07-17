import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {StorageKeys} from "../../app/app.component";
import {FoodPage} from "../food/food";
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public static mBudget: number = 0;
  public static monthlyExpenses: number = 0;
  private testH = [];
  error_msg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage) {

    this.storage.get(StorageKeys.MONTHLY_BUDGET).then(value => {
      HomePage.mBudget = value;
    });

    this.storage.get(StorageKeys.MONTHLY_EXPENSES).then(value => {
      HomePage.monthlyExpenses = value;
    });

    this.storage.get(StorageKeys.TEST).then(value => {
      var counters = JSON.parse(value);
      for (var i = 0; i < counters.length; i++) {
        this.testH.push(counters[i]);
        console.log(this.testH.length);
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error home");
      console.log("eroor home");
    });

  }

  get getMonthlyBudget() {
    return HomePage.mBudget;
  }

  get getMonthlyExpenses() {
    return HomePage.monthlyExpenses;
  }


  ionViewDidLoad() {

    console.log("size test:" + this.testH.length);
    console.log(this.testH);
  }
}
