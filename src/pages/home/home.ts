import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  monthyBudget: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.monthyBudget = navParams.get('budget');
  }

}
