import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import {StorageKeys} from "../../app/app.component";
import {HomePage} from "../home/home";
import {Storage} from '@ionic/storage';
import {RadioButton} from "ionic-angular/umd";
import {FoodModelPage} from "../food-model/food-model";
import {LoanModelPage} from "../loan-model/loan-model";
import {FoodPage} from "../food/food";
import {LoansPage} from "../loans/loans";


/**
 * Generated class for the AddLoanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-loan',
  templateUrl: 'add-loan.html',
})
export class AddLoanPage {

  @ViewChild('loanDate') loanDate;
  private lDate = "";

  @ViewChild('loanAmount') loanAmount;
  private lAmount: number = 0;

  @ViewChild('loanNameOfFriend') loanNameOfFriend;
  private lNameOfFriend = "";

  @ViewChild('loanNote') loanNote;
  private lNote = "";

  private lIsDebt: boolean;
  private addLoanList: Array<LoanModelPage> = [];
  private error_msg: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private storage: Storage) {


    this.storage.get(StorageKeys.LOAN_LIST).then(value => {

      var loans = JSON.parse(value);
      if (loans.length != 0) {
        if (loans.length !== this.addLoanList.length) {
          for (var i = 0; i < loans.length; i++) {
            this.addLoanList.push(loans[i]);
            console.log(this.addLoanList[i]);
          }
        }
        console.log("array not empty");
      }
      else {
        console.log("array empty");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error: add-food");

    });

  }

  /*isDebtAnswer(value){

    if (value === 1){
      this.lIsDebt = true;
      console.log("debt: " + this.lIsDebt);
    }
    else {
      this.lIsDebt = false;
      console.log("debt: " + this.lIsDebt);
    }
  }*/

  presentAlert() {

    let alert = this.alertCtrl.create({
      title: 'Field is empty!',
      subTitle: 'Every field needs a input!!!',
      buttons: ['OK']
    });
    alert.present();
  }

  clearLoanInput() {

    this.loanDate.value = "";
    this.loanAmount.value = "";
    this.loanNameOfFriend.value = "";
    this.loanNote.value = "";
  }

  subtractFromMonthlyBudget() {

    HomePage.mBudget -= this.lAmount;
    this.storage.set(StorageKeys.MONTHLY_BUDGET, HomePage.mBudget);
  }

  addToMonthlyExpenses() {

    HomePage.monthlyExpenses = +HomePage.monthlyExpenses + +this.lAmount;
    this.storage.set(StorageKeys.MONTHLY_EXPENSES, HomePage.monthlyExpenses);
  }

  generateLoanPage() {

    this.lDate = this.loanDate.value;
    this.lAmount = this.loanAmount.value;
    this.subtractFromMonthlyBudget();
    this.addToMonthlyExpenses();
    this.lNameOfFriend = this.loanNameOfFriend.value;
    this.lNote = this.loanNote.value;

    return new LoanModelPage(this.lDate, this.lAmount, this.lNameOfFriend, this.lNote, this.lIsDebt);
  }

  saveLoan(){

    if (this.loanDate.value === "" || this.loanAmount.value === ""
      || this.loanNameOfFriend.value === "" || this.loanNote.value === "") {
      this.presentAlert();
    }
    else {
      let loanPage: LoanModelPage = this.generateLoanPage();
      this.addLoanList.push(loanPage);
      this.storage.set(StorageKeys.LOAN_LIST, JSON.stringify(this.addLoanList));
      this.navCtrl.setRoot(LoansPage);
    }
  }


}
