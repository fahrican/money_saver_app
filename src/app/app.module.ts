import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {FoodPage} from "../pages/food/food";
import {DrinksPage} from "../pages/drinks/drinks";
import {BudgetPage} from "../pages/budget/budget";
import {ClothesPage} from "../pages/clothes/clothes";
import {EarningsPage} from "../pages/earnings/earnings";
import {ExpensesPage} from "../pages/expenses/expenses";
import {HealthPage} from "../pages/health/health";
import {LoansPage} from "../pages/loans/loans";
import {NightLifePage} from "../pages/night-life/night-life";
import {AddFoodPage} from "../pages/add-food/add-food";
import {FoodModelPage} from "../pages/food-model/food-model";
import {AddLoanPage} from "../pages/add-loan/add-loan";
import {LoanModelPage} from "../pages/loan-model/loan-model";
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FoodPage,
    DrinksPage,
    BudgetPage,
    ClothesPage,
    EarningsPage,
    ExpensesPage,
    HealthPage,
    LoansPage,
    NightLifePage,
    AddFoodPage,
    FoodModelPage,
    AddLoanPage,
    LoanModelPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FoodPage,
    DrinksPage,
    BudgetPage,
    ClothesPage,
    EarningsPage,
    ExpensesPage,
    HealthPage,
    LoansPage,
    NightLifePage,
    AddFoodPage,
    FoodModelPage,
    AddLoanPage,
    LoanModelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
