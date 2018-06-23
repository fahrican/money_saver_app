import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NightLifePage } from './night-life';

@NgModule({
  declarations: [
    NightLifePage,
  ],
  imports: [
    IonicPageModule.forChild(NightLifePage),
  ],
})
export class NightLifePageModule {}
