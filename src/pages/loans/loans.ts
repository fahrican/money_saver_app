import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddFoodPage} from "../add-food/add-food";
import {AddLoanPage} from "../add-loan/add-loan";
import {FoodModelPage} from "../food-model/food-model";
import {LoanModelPage} from "../loan-model/loan-model";

/**
 * Generated class for the LoansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loans',
  templateUrl: 'loans.html',
})
export class LoansPage {

  private loansList:Array<LoanModelPage> = [];
  private error_msg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoansPage');
  }

  addLoan(){
    this.navCtrl.setRoot(AddLoanPage);
  }

}
