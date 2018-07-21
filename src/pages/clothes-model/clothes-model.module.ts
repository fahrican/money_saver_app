import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClothesModelPage } from './clothes-model';

@NgModule({
  declarations: [
    ClothesModelPage,
  ],
  imports: [
    IonicPageModule.forChild(ClothesModelPage),
  ],
})
export class ClothesModelPageModule {}
