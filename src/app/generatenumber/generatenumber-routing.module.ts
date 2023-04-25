import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneratenumberPage } from './generatenumber.page';

const routes: Routes = [
  {
    path: '',
    component: GeneratenumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneratenumberPageRoutingModule {}
