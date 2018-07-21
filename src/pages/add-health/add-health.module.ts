import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddHealthPage } from './add-health';

@NgModule({
  declarations: [
    AddHealthPage,
  ],
  imports: [
    IonicPageModule.forChild(AddHealthPage),
  ],
})
export class AddHealthPageModule {}
