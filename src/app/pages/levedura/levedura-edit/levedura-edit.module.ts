import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeveduraEditPage } from './levedura-edit.page';

const routes: Routes = [
  {
    path: '',
    component: LeveduraEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeveduraEditPage]
})
export class LeveduraEditPageModule {}
