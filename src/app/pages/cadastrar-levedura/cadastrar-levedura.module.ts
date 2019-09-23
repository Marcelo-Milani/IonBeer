import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarLeveduraPage } from './cadastrar-levedura.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarLeveduraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarLeveduraPage]
})
export class CadastrarLeveduraPageModule {}
