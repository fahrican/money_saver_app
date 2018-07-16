import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import {StorageKeys} from "../../app/app.component";
import {HomePage} from "../home/home";
import {Storage} from '@ionic/storage';
import {RadioButton} from "ionic-angular/umd";


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

  @ViewChild('loanDate') foodDate;
  private lDate = "";

  @ViewChild('loanAmount') foodAmount;
  private lAmount: number = 0;

  @ViewChild('loanNameOfFriend') foodPaymentMethod;
  private lNameOfFriend = "";

  @ViewChild('loanNote') foodNote;
  private lNote = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private storage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLoanPage');
  }

  presentAlert() {

    let alert = this.alertCtrl.create({
      title: 'Field is empty!',
      subTitle: 'Every field needs a input!!!',
      buttons: ['OK']
    });
    alert.present();
  }

  mcqAnswer(value){
    console.log(value);
  }

}
