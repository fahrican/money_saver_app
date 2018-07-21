import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {FoodPage} from "../pages/food/food";
import {DrinksPage} from "../pages/drinks/drinks";
import {BudgetPage} from "../pages/budget/budget";
import {ClothesPage} from "../pages/clothes/clothes";
import {EarningsPage} from "../pages/earnings/earnings";
import {HealthPage} from "../pages/health/health";
import {LoansPage} from "../pages/loans/loans";
import {NightLifePage} from "../pages/night-life/night-life";


export enum StorageKeys {
  MONTHLY_BUDGET = "budget",
  MONTHLY_EXPENSES = "monthlyExpenses",
  FOOD_LIST = "foodList",
  LOAN_LIST = "loanList",
  DRINK_LIST = "drinkList",
  CLOTHES_LIST = "clothesList",
  HEALTH_LIST = "healthList",
  NIGHT_LIFE_LIST = "nightLifeList",
  TEST = "test"
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage: any;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'home', component: HomePage},
      {title: 'food', component: FoodPage},
      {title: 'drinks', component: DrinksPage},
      {title: 'clothes', component: ClothesPage},
      {title: 'health', component: HealthPage},
      {title: 'night life', component: NightLifePage},
      {title: 'earnings', component: EarningsPage},
      {title: 'loans', component: LoansPage},
      {title: 'budget', component: BudgetPage}
    ];

    this.activePage = this.pages[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){

    return page === this.activePage;
  }
}
