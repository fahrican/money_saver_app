import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {HomePage} from "../home/home";
import {AddFoodPage} from "../add-food/add-food";


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

  public budget: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    this.storage.get('budget').then((val) => {
      this.budget = val;
    });
  }


  addExpense() {

    this.navCtrl.setRoot(AddFoodPage, {
      budget: this.budget
    });
  }
}
