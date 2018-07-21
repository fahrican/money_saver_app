import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddEarningsPage} from "../add-earnings/add-earnings";
import {StorageKeys} from "../../app/app.component";
import {EarningsModelPage} from "../earnings-model/earnings-model";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the EarningsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-earnings',
  templateUrl: 'earnings.html',
})
export class EarningsPage {

  private error_msg: any;
  private listEarnings: Array<EarningsModelPage> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage: Storage) {

    this.storage.get(StorageKeys.EARNINGS_LIST).then(value => {

      var earnings = JSON.parse(value);
      if (earnings.length != 0) {
        for (var i = 0; i < earnings.length; i++) {
          this.listEarnings.push(earnings[i]);
          console.log(this.listEarnings[i]);
        }
        console.log("array not empty");
      }
      else {
        console.log("array empty");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error: earnings");
    });
  }

  ionViewDidLoad() {

  }

  addEarning() {
    this.navCtrl.setRoot(AddEarningsPage);
  }

}
