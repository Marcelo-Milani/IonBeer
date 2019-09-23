import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarTipoCervejaPage } from './cadastrar-tipo-cerveja.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarTipoCervejaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarTipoCervejaPage]
})
export class CadastrarTipoCervejaPageModule {}
