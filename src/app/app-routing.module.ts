import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', loadChildren:'./pages/home/home.module#HomePageModule'},
  { path:'home', loadChildren:'./pages/home/home.module#HomePageModule'},
  { path: 'receitas', loadChildren: './pages/receita/receitas/receitas.module#ReceitasPageModule' },
  { path: 'cadastrar-lupulo', loadChildren: './pages/lupulo/cadastrar-lupulo/cadastrar-lupulo.module#CadastrarLupuloPageModule' },
  { path: 'cadastrar-malte', loadChildren: './pages/malte/cadastrar-malte/cadastrar-malte.module#CadastrarMaltePageModule' },
  { path: 'lupulo-details', loadChildren: './pages/lupulo/lupulo-details/lupulo-details.module#LupuloDetailsPageModule' },
  { path: 'receitas-details', loadChildren: './pages/receita/receitas-details/receitas-details.module#ReceitasDetailsPageModule' },
  { path: 'cadastrar-levedura', loadChildren: './pages/levedura/cadastrar-levedura/cadastrar-levedura.module#CadastrarLeveduraPageModule' },
  { path: 'cadastrar-agua', loadChildren: './pages/agua/cadastrar-agua/cadastrar-agua.module#CadastrarAguaPageModule' },
  { path: 'agua-details', loadChildren: './pages/agua/agua-details/agua-details.module#AguaDetailsPageModule' },
  { path: 'malte-details', loadChildren: './pages/malte/malte-details/malte-details.module#MalteDetailsPageModule' },
  { path: 'levedura-details', loadChildren: './pages/levedura/levedura-details/levedura-details.module#LeveduraDetailsPageModule' },
  { path: 'cadastrar-receitas', loadChildren: './pages/receita/cadastrar-receitas/cadastrar-receitas.module#CadastrarReceitasPageModule' },
  { path: 'cadastrar-tipo-cerveja', loadChildren: './pages/tipo-cerveja/cadastrar-tipo-cerveja/cadastrar-tipo-cerveja.module#CadastrarTipoCervejaPageModule' },
  { path: 'tipo-cerveja-details', loadChildren: './pages/tipo-cerveja/tipo-cerveja-details/tipo-cerveja-details.module#TipoCervejaDetailsPageModule' },
  { path: 'lupulo-list', loadChildren: './pages/lupulo/lupulo-list/lupulo-list.module#LupuloListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
