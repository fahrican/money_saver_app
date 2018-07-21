import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNightLifePage } from './add-night-life';

@NgModule({
  declarations: [
    AddNightLifePage,
  ],
  imports: [
    IonicPageModule.forChild(AddNightLifePage),
  ],
})
export class AddNightLifePageModule {}
