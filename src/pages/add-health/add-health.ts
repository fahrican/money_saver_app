import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HealthModelPage} from "../health-model/health-model";
import {Storage} from "@ionic/storage";
import {StorageKeys} from "../../app/app.component";
import {HomePage} from "../home/home";
import {HealthPage} from "../health/health";

/**
 * Generated class for the AddHealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-health',
  templateUrl: 'add-health.html',
})
export class AddHealthPage {

  @ViewChild('healthDate') healthDate;
  private hDate = "";

  @ViewChild('healthAmount') healthAmount;
  private hAmount: number = 0;

  @ViewChild('healthPaymentMethod') healthPaymentMethod;
  private hPaymentMethod = "";

  @ViewChild('healthNote') healthNote;
  private hNote = "";

  private listAddHealth: Array<HealthModelPage> = [];
  private error_msg: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private storage: Storage) {

    this.storage.get(StorageKeys.HEALTH_LIST).then(value => {

      var health = JSON.parse(value);
      if (health.length != 0) {
        if (health.length !== this.listAddHealth.length) {
          for (var i = 0; i < health.length; i++) {
            this.listAddHealth.push(health[i]);
            console.log(this.listAddHealth[i]);
          }
        }
        console.log("array not empty");
      }
      else {
        console.log("array empty");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error: add-health");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHealthPage');
  }

  presentAlert() {

    let alert = this.alertCtrl.create({
      title: 'Field is empty!',
      subTitle: 'Every field needs a input!!!',
      buttons: ['OK']
    });
    alert.present();
  }

  clearHealthExpense(){

    this.healthDate.value = "";
    this.healthAmount.value = "";
    this.healthPaymentMethod.value = "";
    this.healthNote.value = "";
  }

  subtractFromMonthlyBudget() {

    HomePage.mBudget -= this.hAmount;
    this.storage.set(StorageKeys.MONTHLY_BUDGET, HomePage.mBudget);
  }

  addToMonthlyExpenses() {

    HomePage.monthlyExpenses = +HomePage.monthlyExpenses + +this.hAmount;
    this.storage.set(StorageKeys.MONTHLY_EXPENSES, HomePage.monthlyExpenses);
  }

  generateHealthPage(){

    this.hDate = this.healthDate.value;
    this.hAmount = this.healthAmount.value;
    this.subtractFromMonthlyBudget();
    this.addToMonthlyExpenses();
    this.hPaymentMethod = this.healthPaymentMethod.value;
    this.hNote = this.healthNote.value;

    return new HealthModelPage(this.hDate, this.hAmount, this.hPaymentMethod, this.hNote);
  }

  saveHealthExpense(){

    if (this.healthDate.value === "" || this.healthAmount.value === ""
      || this.healthPaymentMethod.value === "" || this.healthNote.value === "") {
      this.presentAlert();
    }
    else {
      let healthPage: HealthModelPage = this.generateHealthPage();
      this.listAddHealth.push(healthPage);
      this.storage.set(StorageKeys.HEALTH_LIST, JSON.stringify(this.listAddHealth));
      this.navCtrl.setRoot(HealthPage);
    }
  }
}
