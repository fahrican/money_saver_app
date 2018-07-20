import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {StorageKeys} from "../../app/app.component";
import {Storage} from "@ionic/storage";
import {HomePage} from "../home/home";
import {DrinkModelPage} from "../drink-model/drink-model";
import {DrinksPage} from "../drinks/drinks";

/**
 * Generated class for the AddDrinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-drink',
  templateUrl: 'add-drink.html',
})
export class AddDrinkPage {

  @ViewChild('drinkDate') drinkDate;
  private dDate = "";

  @ViewChild('drinkAmount') drinkAmount;
  private dAmount: number = 0;

  @ViewChild('drinkPaymentMethod') drinkPaymentMethod;
  private dPaymentMethod = "";

  @ViewChild('drinkNote') drinkNote;
  private dNote = "";

  private listAddDrink: Array<DrinkModelPage> = [];
  private error_msg: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private storage: Storage) {

    this.storage.get(StorageKeys.DRINK_LIST).then(value => {

      var drink = JSON.parse(value);
      if (drink.length != 0) {
        if (drink.length !== this.listAddDrink.length) {
          for (var i = 0; i < drink.length; i++) {
            this.listAddDrink.push(drink[i]);
            console.log(this.listAddDrink[i]);
          }
        }
        console.log("array not empty");
      }
      else {
        console.log("array empty");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error: add-drink");

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDrinkPage');
  }

  presentAlert() {

    let alert = this.alertCtrl.create({
      title: 'Field is empty!',
      subTitle: 'Every field needs a input!!!',
      buttons: ['OK']
    });
    alert.present();
  }

  clearDrinkExpense(){

    this.drinkDate.value = "";
    this.drinkAmount.value = "";
    this.drinkPaymentMethod.value = "";
    this.drinkNote.value = "";
  }

  subtractFromMonthlyBudget() {

    HomePage.mBudget -= this.dAmount;
    this.storage.set(StorageKeys.MONTHLY_BUDGET, HomePage.mBudget);
  }

  addToMonthlyExpenses() {

    HomePage.monthlyExpenses = +HomePage.monthlyExpenses + +this.dAmount;
    this.storage.set(StorageKeys.MONTHLY_EXPENSES, HomePage.monthlyExpenses);
  }

  generateDrinkPage() {

    this.dDate = this.drinkDate.value;
    this.dAmount = this.drinkAmount.value;
    this.subtractFromMonthlyBudget();
    this.addToMonthlyExpenses();
    this.dPaymentMethod = this.drinkPaymentMethod.value;
    this.dNote = this.drinkNote.value;

    return new DrinkModelPage(this.dDate, this.dAmount, this.dPaymentMethod, this.dNote);
  }

  saveDrinkExpense(){

    if (this.drinkDate.value === "" || this.drinkAmount.value === ""
      || this.drinkPaymentMethod.value === "" || this.drinkNote.value === "") {
      this.presentAlert();
    }
    else {
      let drinkPage: DrinkModelPage = this.generateDrinkPage();
      this.listAddDrink.push(drinkPage);
      this.storage.set(StorageKeys.DRINK_LIST, JSON.stringify(this.listAddDrink));
      this.navCtrl.setRoot(DrinksPage);
    }
  }

}
