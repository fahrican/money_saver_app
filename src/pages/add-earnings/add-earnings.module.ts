import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEarningsPage } from './add-earnings';

@NgModule({
  declarations: [
    AddEarningsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEarningsPage),
  ],
})
export class AddEarningsPageModule {}
