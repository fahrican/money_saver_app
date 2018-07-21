import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {ClothesModelPage} from "../clothes-model/clothes-model";
import {StorageKeys} from "../../app/app.component";
import {HomePage} from "../home/home";
import {ClothesPage} from "../clothes/clothes";

/**
 * Generated class for the AddClothesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-clothes',
  templateUrl: 'add-clothes.html',
})
export class AddClothesPage {

  @ViewChild('clothesDate') clothesDate;
  private cDate = "";

  @ViewChild('clothesAmount') clothesAmount;
  private cAmount: number = 0;

  @ViewChild('clothesPaymentMethod') clothesPaymentMethod;
  private cPaymentMethod = "";

  @ViewChild('clothesNote') clothesNote;
  private cNote = "";

  private listAddClothes: Array<ClothesModelPage> = [];
  private error_msg: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private storage: Storage) {


    this.storage.get(StorageKeys.CLOTHES_LIST).then(value => {

      var clothes = JSON.parse(value);
      if (clothes.length != 0) {
        if (clothes.length !== this.listAddClothes.length) {
          for (var i = 0; i < clothes.length; i++) {
            this.listAddClothes.push(clothes[i]);
            console.log(this.listAddClothes[i]);
          }
        }
        console.log("array not empty");
      }
      else {
        console.log("array empty");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error: add-clothes");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClothesPage');
  }

  presentAlert() {

    let alert = this.alertCtrl.create({
      title: 'Field is empty!',
      subTitle: 'Every field needs a input!!!',
      buttons: ['OK']
    });
    alert.present();
  }

  clearClothesExpense(){

    this.clothesDate.value = "";
    this.clothesAmount.value = "";
    this.clothesPaymentMethod.value = "";
    this.clothesNote.value = "";
  }

  subtractFromMonthlyBudget() {

    HomePage.mBudget -= this.cAmount;
    this.storage.set(StorageKeys.MONTHLY_BUDGET, HomePage.mBudget);
  }

  addToMonthlyExpenses() {

    HomePage.monthlyExpenses = +HomePage.monthlyExpenses + +this.cAmount;
    this.storage.set(StorageKeys.MONTHLY_EXPENSES, HomePage.monthlyExpenses);
  }

  generateClothesPage(){

    this.cDate = this.clothesDate.value;
    this.cAmount = this.clothesAmount.value;
    this.subtractFromMonthlyBudget();
    this.addToMonthlyExpenses();
    this.cPaymentMethod = this.clothesPaymentMethod.value;
    this.cNote = this.clothesNote.value;

    return new ClothesModelPage(this.cDate, this.cAmount, this.cPaymentMethod, this.cNote);
  }

  saveClothesExpense(){

    if (this.clothesDate.value === "" || this.clothesAmount.value === ""
      || this.clothesPaymentMethod.value === "" || this.clothesNote.value === "") {
      this.presentAlert();
    }
    else {
      let clothesPage: ClothesModelPage = this.generateClothesPage();
      this.listAddClothes.push(clothesPage);
      this.storage.set(StorageKeys.CLOTHES_LIST, JSON.stringify(this.listAddClothes));
      this.navCtrl.setRoot(ClothesPage);
    }
  }
}
