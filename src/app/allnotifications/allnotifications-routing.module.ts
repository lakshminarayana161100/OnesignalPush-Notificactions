import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllnotificationsPage } from './allnotifications.page';

const routes: Routes = [
  {
    path: '',
    component: AllnotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllnotificationsPageRoutingModule {}
