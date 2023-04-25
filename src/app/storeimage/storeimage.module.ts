import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreimagePageRoutingModule } from './storeimage-routing.module';

import { StoreimagePage } from './storeimage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreimagePageRoutingModule
  ],
  declarations: [StoreimagePage]
})
export class StoreimagePageModule {}
