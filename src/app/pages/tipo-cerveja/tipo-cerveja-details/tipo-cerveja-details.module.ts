import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipoCervejaDetailsPage } from './tipo-cerveja-details.page';

const routes: Routes = [
  {
    path: '',
    component: TipoCervejaDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipoCervejaDetailsPage]
})
export class TipoCervejaDetailsPageModule {}
