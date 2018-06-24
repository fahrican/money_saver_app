import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the BudgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {

  @ViewChild('monthlyBudget') monthlyBudget;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  saveInput(monthlyBudget){

    this.navCtrl.setRoot(HomePage, {

      budget: monthlyBudget
    });
  }

  clearInput(){

    this.monthlyBudget.value = "";
  }

}
