import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddClothesPage} from "../add-clothes/add-clothes";
import {Storage} from "@ionic/storage";
import {ClothesModelPage} from "../clothes-model/clothes-model";
import {StorageKeys} from "../../app/app.component";

/**
 * Generated class for the ClothesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clothes',
  templateUrl: 'clothes.html',
})
export class ClothesPage {

  private clothesList:Array<ClothesModelPage> = [];
  private error_msg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    this.storage.get(StorageKeys.CLOTHES_LIST).then(value => {

      var clothes = JSON.parse(value);
      if (clothes.length != 0) {
        if (clothes.length !== this.clothesList.length) {
          for (var i = 0; i < clothes.length; i++) {
            this.clothesList.push(clothes[i]);
            console.log(this.clothesList[i]);
          }
        }
        console.log("array not empty");
      }
      else {
        console.log("array empty");
      }
    }).catch((error) => {
      this.error_msg = error.error;
      console.log("error: clothes");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClothesPage');
  }

  addClothesExpense(){
    this.navCtrl.setRoot(AddClothesPage);
  }

}
