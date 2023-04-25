import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneratenumberPageRoutingModule } from './generatenumber-routing.module';

import { GeneratenumberPage } from './generatenumber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneratenumberPageRoutingModule
  ],
  declarations: [GeneratenumberPage]
})
export class GeneratenumberPageModule {}
