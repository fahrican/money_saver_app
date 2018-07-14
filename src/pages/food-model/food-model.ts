import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

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

  private _date = "";
  private _amount = 0;
  private _paymentMethod = "";
  private _note = "";

  constructor(private dateParam: string, private amountParam: number,
              private paymentMethodParam: string, private noteParam: string,) {

    this._date = dateParam;
    this._amount = amountParam;
    this._paymentMethod = paymentMethodParam;
    this._note = noteParam;
  }


  get date(): string {
    return this._date;
  }

  get amount(): number {
    return this._amount;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  get note(): string {
    return this._note;
  }
}
