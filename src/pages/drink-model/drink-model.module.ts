import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrinkModelPage } from './drink-model';

@NgModule({
  declarations: [
    DrinkModelPage,
  ],
  imports: [
    IonicPageModule.forChild(DrinkModelPage),
  ],
})
export class DrinkModelPageModule {}
