import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarLupuloPage } from './cadastrar-lupulo.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarLupuloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarLupuloPage]
})
export class CadastrarLupuloPageModule {}
