import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddDrinkPage} from "../add-drink/add-drink";
import {Storage} from "@ionic/storage";
import {FoodModelPage} from "../food-model/food-model";
import {DrinkModelPage} from "../drink-model/drink-model";
import {StorageKeys} from "../../app/app.component";

/**
 * Generated class for the DrinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html',
})
export class DrinksPage {

  private drinkList:Array<DrinkModelPage> = [];
  private error_msg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {


    this.storage.get(StorageKeys.DRINK_LIST).then(value => {

      var drink = JSON.parse(value);
      if (drink.length != 0) {
        if (drink.length !== this.drinkList.length) {
          for (var i = 0; i < drink.length; i++) {
            this.drinkList.push(drink[i]);
            console.log(this.drinkList[i]);
          }
        }
        console.log("array not empty");
      }
      else {
        console.log("array empty");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error: drink");

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinksPage');
  }

  addDrinkExpense(){
    this.navCtrl.setRoot(AddDrinkPage);
  }

}
