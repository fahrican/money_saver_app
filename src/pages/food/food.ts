import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {HomePage} from "../home/home";
import {AddFoodPage} from "../add-food/add-food";
import {FoodModelPage} from "../food-model/food-model";
import {StorageKeys} from "../../app/app.component";
import {HttpClientModule} from '@angular/common/http';


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
  private testF = [];
  error_msg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
               private storage: Storage) {



    this.storage.get(StorageKeys.TEST).then(value => {
      //this.testF.push(JSON.parse(value));
      var counters = JSON.parse(value);
      for (var i = 0; i < counters.length; i++) {
        this.testF.push(counters[i]);
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("eroor food");

    });


  }

  ionViewDidLoad() {

    if (FoodPage.foodList.length === 0){
      this.storage.set(StorageKeys.FOOD_LIST, FoodPage.foodList);
      console.log('FoodPage: generated foodList');
    }
    console.log("Food list: " + FoodPage.foodList.length);
    for (var i = 0; i < FoodPage.foodList.length; i++) {

      console.log(FoodPage.foodList[i].date);
      console.log(FoodPage.foodList[i].paymentMethod);
      console.log(FoodPage.foodList[i].amount);
      console.log(FoodPage.foodList[i].note);
    }

  }

  addFoodExpense() {

    this.navCtrl.setRoot(AddFoodPage);

    this.testF.push("hihi");
    this.storage.set(StorageKeys.TEST, JSON.stringify(this.testF));
    console.log("size: " + this.testF.length);
  }

  get theFoodList(){
    return FoodPage.foodList;
  }
}
