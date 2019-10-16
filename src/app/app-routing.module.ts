import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'cadastrar-lupulo', loadChildren: './pages/lupulo/cadastrar-lupulo/cadastrar-lupulo.module#CadastrarLupuloPageModule' },
  { path: 'lupulo-list', loadChildren: './pages/lupulo/lupulo-list/lupulo-list.module#LupuloListPageModule' },
  { path: 'lupulo-edit/:id', loadChildren: './pages/lupulo/lupulo-edit/lupulo-edit.module#LupuloEditPageModule' },
  { path: 'lupulo-details/:id', loadChildren: './pages/lupulo/lupulo-details/lupulo-details.module#LupuloDetailsPageModule' },
  { path: 'cadastrar-malte', loadChildren: './pages/malte/cadastrar-malte/cadastrar-malte.module#CadastrarMaltePageModule' },
  { path: 'malte-details/:id', loadChildren: './pages/malte/malte-details/malte-details.module#MalteDetailsPageModule' },
  { path: 'malte-list', loadChildren: './pages/malte/malte-list/malte-list.module#MalteListPageModule' },
  { path: 'malte-edit/:id', loadChildren: './pages/malte/malte-edit/malte-edit.module#MalteEditPageModule' },
  { path: 'cadastrar-levedura', loadChildren: './pages/levedura/cadastrar-levedura/cadastrar-levedura.module#CadastrarLeveduraPageModule' },
  { path: 'levedura-details/:id', loadChildren: './pages/levedura/levedura-details/levedura-details.module#LeveduraDetailsPageModule' },
  { path: 'levedura-list', loadChildren: './pages/levedura/levedura-list/levedura-list.module#LeveduraListPageModule' },
  { path: 'levedura-edit/:id', loadChildren: './pages/levedura/levedura-edit/levedura-edit.module#LeveduraEditPageModule' },
  { path: 'cadastrar-agua', loadChildren: './pages/agua/cadastrar-agua/cadastrar-agua.module#CadastrarAguaPageModule' },
  { path: 'agua-details/:id', loadChildren: './pages/agua/agua-details/agua-details.module#AguaDetailsPageModule' },  
  { path: 'agua-list', loadChildren: './pages/agua/agua-list/agua-list.module#AguaListPageModule' },
  { path: 'agua-edit/:id', loadChildren: './pages/agua/agua-edit/agua-edit.module#AguaEditPageModule' },
  { path: 'cadastrar-receitas', loadChildren: './pages/receita/cadastrar-receitas/cadastrar-receitas.module#CadastrarReceitasPageModule' },
  { path: 'receitas-details/:id', loadChildren: './pages/receita/receitas-details/receitas-details.module#ReceitasDetailsPageModule' },
  { path: 'receitas-details', loadChildren: './pages/receita/receitas-details/receitas-details.module#ReceitasDetailsPageModule' },
  { path: 'receitas-edit/:id', loadChildren: './pages/receita/receitas-edit/receitas-edit.module#ReceitasEditPageModule' },
  { path: 'receitas-list', loadChildren: './pages/receita/receitas-list/receitas-list.module#ReceitasListPageModule' },
  { path: 'cadastrar-tipo-cerveja', loadChildren: './pages/tipo-cerveja/cadastrar-tipo-cerveja/cadastrar-tipo-cerveja.module#CadastrarTipoCervejaPageModule' },
  { path: 'tipo-cerveja-details/:id', loadChildren: './pages/tipo-cerveja/tipo-cerveja-details/tipo-cerveja-details.module#TipoCervejaDetailsPageModule' },
  { path: 'tipo-cerveja-details', loadChildren: './pages/tipo-cerveja/tipo-cerveja-details/tipo-cerveja-details.module#TipoCervejaDetailsPageModule' },
  { path: 'tipo-cerveja-list', loadChildren: './pages/tipo-cerveja/tipo-cerveja-list/tipo-cerveja-list.module#TipoCervejaListPageModule' },
  { path: 'tipo-cerveja-edit/:id', loadChildren: './pages/tipo-cerveja/tipo-cerveja-edit/tipo-cerveja-edit.module#TipoCervejaEditPageModule' },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
