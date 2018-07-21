import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NightLifeModelPage } from './night-life-model';

@NgModule({
  declarations: [
    NightLifeModelPage,
  ],
  imports: [
    IonicPageModule.forChild(NightLifeModelPage),
  ],
})
export class NightLifeModelPageModule {}
