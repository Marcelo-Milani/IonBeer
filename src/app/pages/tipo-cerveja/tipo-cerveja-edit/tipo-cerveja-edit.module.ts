import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipoCervejaEditPage } from './tipo-cerveja-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TipoCervejaEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipoCervejaEditPage]
})
export class TipoCervejaEditPageModule {}
