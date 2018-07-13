import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodModelPage } from './food-model';

@NgModule({
  declarations: [
    FoodModelPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodModelPage),
  ],
})
export class FoodModelPageModule {}
