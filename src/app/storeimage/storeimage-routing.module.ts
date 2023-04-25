import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreimagePage } from './storeimage.page';

const routes: Routes = [
  {
    path: '',
    component: StoreimagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreimagePageRoutingModule {}
