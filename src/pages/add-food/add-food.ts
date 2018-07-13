import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, AlertController, NavParams} from 'ionic-angular';

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
  @ViewChild('foodPaymentMethod') foodPaymentMethod;
  @ViewChild('foodNote') foodNote;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController) {

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
      || this.foodPaymentMethod.value === "" || this.foodNote.value === "")
    {
      this.presentAlert();
    }
  }
}
