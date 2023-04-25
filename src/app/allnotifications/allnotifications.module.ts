import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllnotificationsPageRoutingModule } from './allnotifications-routing.module';

import { AllnotificationsPage } from './allnotifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllnotificationsPageRoutingModule
  ],
  declarations: [AllnotificationsPage]
})
export class AllnotificationsPageModule {}
