import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LupuloDetailsPage } from './lupulo-details.page';

const routes: Routes = [
  {
    path: '',
    component: LupuloDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LupuloDetailsPage]
})
export class LupuloDetailsPageModule {}
