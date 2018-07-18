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

  private foodList:Array<FoodModelPage> = [];
  private testF:Array<FoodModelPage> = [];
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
      console.log("error test");

    });


  }

  ionViewDidLoad() {

    console.log("FoodPage list: " + this.foodList.length);
    /*for (var i = 0; i < this.foodList.length; i++) {

      console.log(this.foodList[i].date);
      console.log(this.foodList[i].paymentMethod);
      console.log(this.foodList[i].amount);
      console.log(this.foodList[i].note);
    }*/
    this.storage.get(StorageKeys.FOOD_LIST).then(value => {

      var foods = JSON.parse(value);
      if (foods.length != 0){
        for (var i = 0; i < foods.length; i++) {
          this.foodList.push(foods[i]);
        }
        console.log("array not empty!");
      }
      else {
        console.log("array empty!");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error food");

    });
    console.log("FoodPage list: " + this.foodList.length);

  }

  addFoodExpense() {

    this.navCtrl.setRoot(AddFoodPage);
  }

  get theFoodList(){
    return this.foodList;
  }

  ionViewWillEnter(){

    this.testF.push(new FoodModelPage("222", 22, "22", "22"));
    this.storage.set(StorageKeys.TEST, JSON.stringify(this.testF));
    //this.storage.set(StorageKeys.FOOD_LIST, JSON.stringify(this.foodList));
  }
}
