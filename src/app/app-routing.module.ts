import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'receitas', loadChildren: './pages/receita/receitas/receitas.module#ReceitasPageModule' },
  { path: 'cadastrar-lupulo', loadChildren: './pages/lupulo/cadastrar-lupulo/cadastrar-lupulo.module#CadastrarLupuloPageModule' },
  { path: 'lupulo-list', loadChildren: './pages/lupulo/lupulo-list/lupulo-list.module#LupuloListPageModule' },
  { path: 'lupulo-edit/:id', loadChildren: './pages/lupulo/lupulo-edit/lupulo-edit.module#LupuloEditPageModule' },
  { path: 'lupulo-details/:id', loadChildren: './pages/lupulo/lupulo-details/lupulo-details.module#LupuloDetailsPageModule' },
  { path: 'cadastrar-malte', loadChildren: './pages/malte/cadastrar-malte/cadastrar-malte.module#CadastrarMaltePageModule' },
  { path: 'malte-details/:id', loadChildren: './pages/malte/malte-details/malte-details.module#MalteDetailsPageModule' },
  { path: 'malte-list', loadChildren: './pages/malte/malte-list/malte-list.module#MalteListPageModule' },
  { path: 'malte-edit/:id', loadChildren: './pages/malte/malte-edit/malte-edit.module#MalteEditPageModule' },
  { path: 'receitas-details', loadChildren: './pages/receita/receitas-details/receitas-details.module#ReceitasDetailsPageModule' },
  { path: 'cadastrar-levedura', loadChildren: './pages/levedura/cadastrar-levedura/cadastrar-levedura.module#CadastrarLeveduraPageModule' },
  { path: 'levedura-details', loadChildren: './pages/levedura/levedura-details/levedura-details.module#LeveduraDetailsPageModule' },
  { path: 'cadastrar-agua', loadChildren: './pages/agua/cadastrar-agua/cadastrar-agua.module#CadastrarAguaPageModule' },
  { path: 'agua-details', loadChildren: './pages/agua/agua-details/agua-details.module#AguaDetailsPageModule' },  
  { path: 'cadastrar-receitas', loadChildren: './pages/receita/cadastrar-receitas/cadastrar-receitas.module#CadastrarReceitasPageModule' },
  { path: 'cadastrar-tipo-cerveja', loadChildren: './pages/tipo-cerveja/cadastrar-tipo-cerveja/cadastrar-tipo-cerveja.module#CadastrarTipoCervejaPageModule' },
  { path: 'tipo-cerveja-details', loadChildren: './pages/tipo-cerveja/tipo-cerveja-details/tipo-cerveja-details.module#TipoCervejaDetailsPageModule' },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
