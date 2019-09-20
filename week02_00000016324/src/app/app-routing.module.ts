import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipe', pathMatch: 'full' },
  { path: 'recipe', loadChildren: './recipe/recipe.module#RecipePageModule' },
  { path: 'recipe/:recipeId', loadChildren: './recipe/recipe-detail/recipe-detail.module#RecipeDetailPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
