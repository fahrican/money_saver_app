import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {Storage} from '@ionic/storage';
import {StorageKeys} from "../../app/app.component";
import {FoodPage} from "../food/food";
import {FoodModelPage} from "../food-model/food-model";
import {HttpClientModule} from '@angular/common/http';
import {LoanModelPage} from "../loan-model/loan-model";
import {DrinkModelPage} from "../drink-model/drink-model";


/**
 * Generated class for the BudgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {

  @ViewChild('monthlyBudget') monthlyBudget;
  public budget: number = 0;

  private foodListBudget: Array<FoodModelPage> = [];
  private loanListBudget: Array<LoanModelPage> = [];
  private drinkListBudget: Array<DrinkModelPage> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    this.storage.get(StorageKeys.MONTHLY_BUDGET).then((val) => {
      this.budget = val;
    });
  }

  saveInput() {

    this.storage.set(StorageKeys.MONTHLY_BUDGET, this.budget);
    this.navCtrl.setRoot(HomePage, {
      budget: this.budget
    });
  }

  clearInput() {

    this.monthlyBudget.value = "";
    this.storage.set(StorageKeys.MONTHLY_BUDGET, 0);
    this.storage.set(StorageKeys.MONTHLY_EXPENSES, 0);
    this.storage.set(StorageKeys.FOOD_LIST, JSON.stringify(this.foodListBudget));
    this.storage.set(StorageKeys.LOAN_LIST, JSON.stringify(this.loanListBudget));
    this.storage.set(StorageKeys.DRINK_LIST, JSON.stringify(this.drinkListBudget));
  }

  ionViewDidLoad() {
    console.log(this.foodListBudget);
  }

}
