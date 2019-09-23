import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarMaltePage } from './cadastrar-malte.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarMaltePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarMaltePage]
})
export class CadastrarMaltePageModule {}
