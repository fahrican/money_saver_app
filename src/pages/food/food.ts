import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {HomePage} from "../home/home";
import {AddFoodPage} from "../add-food/add-food";
import {FoodModelPage} from "../food-model/food-model";


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

    //this.storage.set('foodList', FoodPage.foodList);

  }


  ionViewDidLoad() {
    console.log('FoodPage: test');
    console.log(FoodPage.foodList.length)
  }

  addExpense() {

    this.navCtrl.setRoot(AddFoodPage);
  }
}
