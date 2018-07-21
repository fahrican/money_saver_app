import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {EarningsModelPage} from "../earnings-model/earnings-model";
import {StorageKeys} from "../../app/app.component";
import {HomePage} from "../home/home";
import {EarningsPage} from "../earnings/earnings";
import {Storage} from "@ionic/storage";


/**
 * Generated class for the AddEarningsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-earnings',
  templateUrl: 'add-earnings.html',
})
export class AddEarningsPage {

  @ViewChild('earningDate') earningDate;
  private eDate = "";

  @ViewChild('earningAmount') earningAmount;
  private eAmount: number = 0;

  @ViewChild('earningPaymentMethod') earningPaymentMethod;
  private ePaymentMethod = "";

  @ViewChild('earningNote') earningNote;
  private eNote = "";

  private listAddEarning: Array<EarningsModelPage> = [];
  private error_msg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private storage: Storage) {

    this.storage.get(StorageKeys.EARNINGS_LIST).then(value => {

      var earnings = JSON.parse(value);
      if (earnings.length != 0) {
        for (var i = 0; i < earnings.length; i++) {
          this.listAddEarning.push(earnings[i]);
          console.log(this.listAddEarning[i]);
        }
        console.log("array not empty");
      }
      else {
        console.log("array empty");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error: add-earnings");
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

  clearEarning() {

    this.earningDate.value = "";
    this.earningAmount.value = "";
    this.earningPaymentMethod.value = "";
    this.earningNote.value = "";
  }

  addToMonthlyBudget() {

    HomePage.mBudget = +HomePage.mBudget + +this.eAmount;
    this.storage.set(StorageKeys.MONTHLY_BUDGET, HomePage.mBudget);
  }

  generateEarningsPage() {

    this.eDate = this.earningDate.value;
    this.eAmount = this.earningAmount.value;
    this.addToMonthlyBudget();
    this.ePaymentMethod = this.earningPaymentMethod.value;
    this.eNote = this.earningNote.value;

    return new EarningsModelPage(this.eDate, this.eAmount, this.ePaymentMethod, this.eNote);
  }

  saveEarning() {

    if (this.earningDate.value === "" || this.earningAmount.value === ""
      || this.earningPaymentMethod.value === "" || this.earningNote.value === "") {
      this.presentAlert();
    }
    else {
      let earningPage: EarningsModelPage = this.generateEarningsPage();
      this.listAddEarning.push(earningPage);
      this.storage.set(StorageKeys.EARNINGS_LIST, JSON.stringify(this.listAddEarning));
      this.navCtrl.setRoot(EarningsPage);
    }
  }
}
