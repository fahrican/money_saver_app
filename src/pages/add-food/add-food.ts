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

  private foodListAddFood: Array<FoodModelPage> = [];
  private error_msg: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private storage: Storage) {


    this.storage.get(StorageKeys.FOOD_LIST).then(value => {

      var foods = JSON.parse(value);
      if (foods.length != 0) {
        if (foods.length !== this.foodListAddFood.length) {
          for (var i = 0; i < foods.length; i++) {
            this.foodListAddFood.push(foods[i]);
            console.log(this.foodListAddFood[i]);
          }
        }
        console.log("array not empty");
      }
      else {
        console.log("array empty");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error: add-food");

    });
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
      this.foodListAddFood.push(foodPage);
      this.storage.set(StorageKeys.FOOD_LIST, JSON.stringify(this.foodListAddFood));
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

  subtractFromMonthlyBudget() {

    HomePage.mBudget -= this.fAmount;
    this.storage.set(StorageKeys.MONTHLY_BUDGET, HomePage.mBudget);
  }

  addToMonthlyExpenses() {

    HomePage.monthlyExpenses = +HomePage.monthlyExpenses + +this.fAmount;
    this.storage.set(StorageKeys.MONTHLY_EXPENSES, HomePage.monthlyExpenses);
  }

  ionViewDidLeave() {

    console.log("add Food list: " + this.foodListAddFood.length);
    for (var i = 0; i < this.foodListAddFood.length; i++) {

      console.log(this.foodListAddFood[i].date);
      console.log(this.foodListAddFood[i].paymentMethod);
      console.log(this.foodListAddFood[i].amount);
      console.log(this.foodListAddFood[i].note);
    }
  }
}
