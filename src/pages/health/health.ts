import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddHealthPage} from "../add-health/add-health";
import {StorageKeys} from "../../app/app.component";
import {Storage} from "@ionic/storage";
import {HealthModelPage} from "../health-model/health-model";

/**
 * Generated class for the HealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {

  private error_msg: any;
  private listHealth: Array<HealthModelPage> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    this.storage.get(StorageKeys.HEALTH_LIST).then(value => {

      var health = JSON.parse(value);
      if (health.length != 0) {
        if (health.length !== this.listHealth.length) {
          for (var i = 0; i < health.length; i++) {
            this.listHealth.push(health[i]);
            console.log(this.listHealth[i]);
          }
        }
        console.log("array not empty");
      }
      else {
        console.log("array empty");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error: add-health");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthPage');
  }

  addHealthExpense(){
    this.navCtrl.setRoot(AddHealthPage);
  }

}
