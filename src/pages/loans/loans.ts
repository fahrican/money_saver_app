import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddFoodPage} from "../add-food/add-food";
import {AddLoanPage} from "../add-loan/add-loan";
import {FoodModelPage} from "../food-model/food-model";
import {LoanModelPage} from "../loan-model/loan-model";
import {Storage} from "@ionic/storage";
import {StorageKeys} from "../../app/app.component";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage) {

    this.storage.get(StorageKeys.LOAN_LIST).then(value => {

      var loans = JSON.parse(value);
      if (loans.length != 0){
        for (var i = 0; i < loans.length; i++) {
          this.loansList.push(loans[i]);
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
    console.log("LoansPage list: " + this.loansList.length);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoansPage');
  }

  addLoan(){
    this.navCtrl.setRoot(AddLoanPage);
  }

}
