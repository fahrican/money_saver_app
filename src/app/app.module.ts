import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FoodPage} from "../pages/food/food";
import  { DrinksPage } from "../pages/drinks/drinks";
import {BudgetPage} from "../pages/budget/budget";
import {ClothesPage} from "../pages/clothes/clothes";
import {EarningsPage} from "../pages/earnings/earnings";
import {ExpensesPage} from "../pages/expenses/expenses";
import {HealthPage} from "../pages/health/health";
import {LoansPage} from "../pages/loans/loans";
import {NightLifePage} from "../pages/night-life/night-life";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    NightLifePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    NightLifePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
