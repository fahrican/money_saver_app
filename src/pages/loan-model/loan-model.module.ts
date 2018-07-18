import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanModelPage } from './loan-model';

@NgModule({
  declarations: [
    LoanModelPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanModelPage),
  ],
})
export class LoanModelPageModule {}
