import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddLoanPage } from './add-loan';

@NgModule({
  declarations: [
    AddLoanPage,
  ],
  imports: [
    IonicPageModule.forChild(AddLoanPage),
  ],
})
export class AddLoanPageModule {}
