import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {NightLifeModelPage} from "../night-life-model/night-life-model";
import {StorageKeys} from "../../app/app.component";
import {Storage} from "@ionic/storage";
import {HomePage} from "../home/home";
import {NightLifePage} from "../night-life/night-life";

/**
 * Generated class for the AddNightLifePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-night-life',
  templateUrl: 'add-night-life.html',
})
export class AddNightLifePage {

  @ViewChild('nightLifeDate') nightLifeDate;
  private nlDate = "";

  @ViewChild('nightLifeAmount') nightLifeAmount;
  private nlAmount: number = 0;

  @ViewChild('nightLifePaymentMethod') nightLifePaymentMethod;
  private nlPaymentMethod = "";

  @ViewChild('nightLifeNote') nightLifeNote;
  private nlNote = "";

  private listAddNightLife: Array<NightLifeModelPage> = [];
  private error_msg: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private storage: Storage) {


    this.storage.get(StorageKeys.NIGHT_LIFE_LIST).then(value => {

      var nightLife = JSON.parse(value);
      if (nightLife.length != 0) {
        if (nightLife.length !== this.listAddNightLife.length) {
          for (var i = 0; i < nightLife.length; i++) {
            this.listAddNightLife.push(nightLife[i]);
            console.log(this.listAddNightLife[i]);
          }
        }
        console.log("array not empty");
      }
      else {
        console.log("array empty");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error: add-night-life");

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

  clearNightLifeExpense(){

    this.nightLifeDate.value = "";
    this.nightLifeAmount.value = "";
    this.nightLifePaymentMethod.value = "";
    this.nightLifeNote.value = "";
  }

  subtractFromMonthlyBudget() {

    HomePage.mBudget -= this.nlAmount;
    this.storage.set(StorageKeys.MONTHLY_BUDGET, HomePage.mBudget);
  }

  addToMonthlyExpenses() {

    HomePage.monthlyExpenses = +HomePage.monthlyExpenses + +this.nlAmount;
    this.storage.set(StorageKeys.MONTHLY_EXPENSES, HomePage.monthlyExpenses);
  }

  generateNightLifePage(){

    this.nlDate = this.nightLifeDate.value;
    this.nlAmount = this.nightLifeAmount.value;
    this.subtractFromMonthlyBudget();
    this.addToMonthlyExpenses();
    this.nlPaymentMethod = this.nightLifePaymentMethod.value;
    this.nlNote = this.nightLifeNote.value;

    return new NightLifeModelPage(this.nlDate, this.nlAmount, this.nlPaymentMethod, this.nlNote);
  }

  saveNightLifeExpense(){

    if (this.nightLifeDate.value === "" || this.nightLifeAmount.value === ""
      || this.nightLifePaymentMethod.value === "" || this.nightLifeNote.value === "") {
      this.presentAlert();
    }
    else {
      let nightLifePage: NightLifeModelPage = this.generateNightLifePage();
      this.listAddNightLife.push(nightLifePage);
      this.storage.set(StorageKeys.NIGHT_LIFE_LIST, JSON.stringify(this.listAddNightLife));
      this.navCtrl.setRoot(NightLifePage);
    }
  }

}
