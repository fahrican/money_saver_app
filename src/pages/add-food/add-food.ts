import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, AlertController, NavParams} from 'ionic-angular';
import {FoodPage} from "../food/food";
import {Storage} from '@ionic/storage';
import {HomePage} from "../home/home";
import {FoodModelPage} from "../food-model/food-model";
import {StorageKeys} from "../../app/app.component";

/**
 * Generated class for the AddFoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-food',
  templateUrl: 'add-food.html',
})
export class AddFoodPage {

  @ViewChild('foodDate') foodDate;
  private fDate = "";

  @ViewChild('foodAmount') foodAmount;
  private fAmount: number = 0;

  @ViewChild('foodPaymentMethod') foodPaymentMethod;
  private fPaymentMethod = "";

  @ViewChild('foodNote') foodNote;
  private fNote = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private storage: Storage) {

  }

  presentAlert() {

    let alert = this.alertCtrl.create({
      title: 'Field is empty!',
      subTitle: 'Every field needs a input!!!',
      buttons: ['OK']
    });
    alert.present();
  }

  clearFoodExpense() {

    this.foodDate.value = "";
    this.foodAmount.value = "";
    this.foodPaymentMethod.value = "";
    this.foodNote.value = "";
  }

  saveFoodExpense() {

    if (this.foodDate.value === "" || this.foodAmount.value === ""
      || this.foodPaymentMethod.value === "" || this.foodNote.value === "") {
      this.presentAlert();
    }
    else {
      let foodPage: FoodModelPage = this.generateFoodPage();
      FoodPage.foodList.push(foodPage);
      this.storage.set(StorageKeys.FOOD_LIST, FoodPage.foodList);
      this.navCtrl.setRoot(FoodPage);
    }
  }

  generateFoodPage() {

    this.fDate = this.foodDate.value;
    this.fAmount = this.foodAmount.value;
    this.subtractFromMonthlyBudget();
    this.addToMonthlyExpenses();
    this.fPaymentMethod = this.foodPaymentMethod.value;
    this.fNote = this.foodNote.value;

    return new FoodModelPage(this.fDate, this.fAmount, this.fPaymentMethod, this.fNote);
  }

  subtractFromMonthlyBudget(){

    HomePage.mBudget -= this.fAmount;
    this.storage.set(StorageKeys.MONTHLY_BUDGET, HomePage.mBudget);
    console.log("Budget: " + HomePage.mBudget);
  }

  addToMonthlyExpenses(){

    HomePage.monthlyExpenses = +HomePage.monthlyExpenses + +this.fAmount;
    this.storage.set(StorageKeys.MONTHLY_EXPENSES, HomePage.monthlyExpenses);
    console.log("monthly expenses: " + HomePage.monthlyExpenses);
  }
}
