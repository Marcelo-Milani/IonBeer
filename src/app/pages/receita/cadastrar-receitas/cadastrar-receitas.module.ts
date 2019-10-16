import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarReceitasPage } from './cadastrar-receitas.page';

const routes: Routes = [
  {
    path: 'etapas',
    component: CadastrarReceitasPage,
    children: [
      {
        path: 'etapa1',
        loadChildren: '../etapa1/etapa1.module#Etapa1PageModule'
      },
      {
        path: 'etapa2',
        loadChildren: '../etapa2/etapa2.module#Etapa2PageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'etapas/etapa1',
    pathMatch: 'full'
  }
  
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarReceitasPage]
})
export class CadastrarReceitasPageModule {}
