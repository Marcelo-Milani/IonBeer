import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LupuloEditPage } from './lupulo-edit.page';

const routes: Routes = [
  {
    path: '',
    component: LupuloEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LupuloEditPage]
})
export class LupuloEditPageModule {}
