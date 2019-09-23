import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', loadChildren:'./pages/home/home.module#HomePageModule'},
  { path:'home', loadChildren:'./pages/home/home.module#HomePageModule'},
  { path: 'receitas', loadChildren: './pages/receitas/receitas.module#ReceitasPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'cadastrar-lupulo', loadChildren: './pages/cadastrar-lupulo/cadastrar-lupulo.module#CadastrarLupuloPageModule' },
  { path: 'cadastrar-malte', loadChildren: './pages/cadastrar-malte/cadastrar-malte.module#CadastrarMaltePageModule' },
  { path: 'lupulo-details', loadChildren: './pages/lupulo-details/lupulo-details.module#LupuloDetailsPageModule' },
  { path: 'receitas-details', loadChildren: './pages/receitas-details/receitas-details.module#ReceitasDetailsPageModule' },
  { path: 'cadastrar-levedura', loadChildren: './pages/cadastrar-levedura/cadastrar-levedura.module#CadastrarLeveduraPageModule' },
  { path: 'cadastrar-agua', loadChildren: './pages/cadastrar-agua/cadastrar-agua.module#CadastrarAguaPageModule' },
  { path: 'agua-details', loadChildren: './pages/agua-details/agua-details.module#AguaDetailsPageModule' },
  { path: 'malte-details', loadChildren: './pages/malte-details/malte-details.module#MalteDetailsPageModule' },
  { path: 'levedura-details', loadChildren: './pages/levedura-details/levedura-details.module#LeveduraDetailsPageModule' },
  { path: 'cadastrar-receitas', loadChildren: './pages/cadastrar-receitas/cadastrar-receitas.module#CadastrarReceitasPageModule' },
  { path: 'cadastrar-tipo-cerveja', loadChildren: './pages/cadastrar-tipo-cerveja/cadastrar-tipo-cerveja.module#CadastrarTipoCervejaPageModule' },
  { path: 'tipo-cerveja-details', loadChildren: './pages/tipo-cerveja-details/tipo-cerveja-details.module#TipoCervejaDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
