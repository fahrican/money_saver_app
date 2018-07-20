import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDrinkPage } from './add-drink';

@NgModule({
  declarations: [
    AddDrinkPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDrinkPage),
  ],
})
export class AddDrinkPageModule {}
