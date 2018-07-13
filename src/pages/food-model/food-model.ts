import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FoodModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-model',
  templateUrl: 'food-model.html',
})
export class FoodModelPage {

  public date = "";
  private amount = 0;
  private paymentMethod = "";
  private note = "";

  constructor(private dateParam: string, private amountParam: number,
              private paymentMethodParam: string, private noteParam: string,) {

    this.date = dateParam;
    this.amount = amountParam;
    this.paymentMethod = paymentMethodParam;
    this.note = noteParam;

  }


}
