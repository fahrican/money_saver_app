import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddNightLifePage} from "../add-night-life/add-night-life";
import {Storage} from "@ionic/storage";
import {NightLifeModelPage} from "../night-life-model/night-life-model";
import {StorageKeys} from "../../app/app.component";

/**
 * Generated class for the NightLifePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-night-life',
  templateUrl: 'night-life.html',
})
export class NightLifePage {

  private listNightLife: Array<NightLifeModelPage> = [];
  private error_msg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    this.storage.get(StorageKeys.NIGHT_LIFE_LIST).then(value => {

      var nightLife = JSON.parse(value);
      if (nightLife.length != 0) {
        if (nightLife.length !== this.listNightLife.length) {
          for (var i = 0; i < nightLife.length; i++) {
            this.listNightLife.push(nightLife[i]);
            console.log(this.listNightLife[i]);
          }
        }
        console.log("array not empty");
      }
      else {
        console.log("array empty");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error: add-night-life");

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NightLifePage');
  }

  addNightLifeExpense(){
    this.navCtrl.setRoot(AddNightLifePage);
  }

}
