import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipoCervejaListPage } from './tipo-cerveja-list.page';

const routes: Routes = [
  {
    path: '',
    component: TipoCervejaListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipoCervejaListPage]
})
export class TipoCervejaListPageModule {}
