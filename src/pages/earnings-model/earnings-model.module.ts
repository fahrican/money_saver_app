import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EarningsModelPage } from './earnings-model';

@NgModule({
  declarations: [
    EarningsModelPage,
  ],
  imports: [
    IonicPageModule.forChild(EarningsModelPage),
  ],
})
export class EarningsModelPageModule {}
