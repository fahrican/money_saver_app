import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClothesModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clothes-model',
  templateUrl: 'clothes-model.html',
})
export class ClothesModelPage {

  private _date = "";
  private _amount = 0;
  private _paymentMethod = "";
  private _note = "";

  constructor(date: string, amount: number, paymentMethod: string, note: string) {
    this._date = date;
    this._amount = amount;
    this._paymentMethod = paymentMethod;
    this._note = note;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get note(): string {
    return this._note;
  }

  set note(value: string) {
    this._note = value;
  }
}
