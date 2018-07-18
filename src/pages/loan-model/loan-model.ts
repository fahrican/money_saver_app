import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the LoanModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loan-model',
  templateUrl: 'loan-model.html',
})
export class LoanModelPage {

  private _date = "";
  private _amount = 0;
  private _nameOfFriend = "";
  private _note = "";
  private _isDebt: boolean;


  constructor(date: string, amount: number, paymentMethod: string, note: string, isDebt: boolean) {

    this._date = date;
    this._amount = amount;
    this._nameOfFriend = paymentMethod;
    this._note = note;
    this._isDebt = isDebt
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

  get nameOfFriend(): string {
    return this._nameOfFriend;
  }

  set nameOfFriend(value: string) {
    this._nameOfFriend = value;
  }

  get note(): string {
    return this._note;
  }

  set note(value: string) {
    this._note = value;
  }


  get isDebt(): boolean {
    return this._isDebt;
  }

  set isDebt(value: boolean) {
    this._isDebt = value;
  }
}
