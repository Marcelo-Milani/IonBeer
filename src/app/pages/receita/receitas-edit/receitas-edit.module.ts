import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceitasEditPage } from './receitas-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitasEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceitasEditPage]
})
export class ReceitasEditPageModule {}
