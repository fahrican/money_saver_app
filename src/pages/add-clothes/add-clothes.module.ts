import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddClothesPage } from './add-clothes';

@NgModule({
  declarations: [
    AddClothesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddClothesPage),
  ],
})
export class AddClothesPageModule {}
