import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {HomePage} from "../home/home";
import {AddFoodPage} from "../add-food/add-food";
import {FoodModelPage} from "../food-model/food-model";
import {StorageKeys} from "../../app/app.component";


/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {

  public static foodList: FoodModelPage[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
               private storage: Storage) {

  }

  ionViewDidLoad() {

    if (FoodPage.foodList.length === 0){
      this.storage.set(StorageKeys.FOOD_LIST, FoodPage.foodList);
      console.log('FoodPage: generated foodList');
    }
  }

  addExpense() {

    this.navCtrl.setRoot(AddFoodPage);
  }

  get theFoodList(){
    return FoodPage.foodList;
  }
}
