import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthModelPage } from './health-model';

@NgModule({
  declarations: [
    HealthModelPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthModelPage),
  ],
})
export class HealthModelPageModule {}
