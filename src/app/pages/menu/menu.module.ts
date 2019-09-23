import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'cadastrar-lupulo',
        loadChildren: '../cadastrar-lupulo/cadastrar-lupulo.module#CadastrarLupuloPageModule'
      },
      {
        path: 'cadastrar-malte',
        loadChildren: '../cadastrar-malte/cadastrar-malte.module#CadastrarMaltePageModule'
      },
      {
        path: 'lupulo-details',
        loadChildren: '../lupulo-details/lupulo-details.module#LupuloDetailsPageModule'
      },
      {
        path: 'receitas-details',
        loadChildren: '../receitas-details/receitas-details.module#ReceitasDetailsPageModule'
      },
      {
        path: 'cadastrar-levedura',
        loadChildren: '../cadastrar-levedura/cadastrar-levedura.module#CadastrarLeveduraPageModule'
      },
      {
        path: 'cadastrar-agua',
        loadChildren: '../cadastrar-agua/cadastrar-agua.module#CadastrarAguaPageModule'
      },
      {
        path: 'agua-details',
        loadChildren: '../agua-details/agua-details.module#AguaDetailsPageModule'
      },
      {
        path: 'malte-details',
        loadChildren: '../malte-details/malte-details.module#MalteDetailsPageModule'
      },
      {
        path: 'levedura-details',
        loadChildren: '../levedura-details/levedura-details.module#LeveduraDetailsPageModule'
      },
      {
        path: 'cadastrar-receitas',
        loadChildren: '../cadastrar-receitas/cadastrar-receitas.module#CadastrarReceitasPageModule'
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
