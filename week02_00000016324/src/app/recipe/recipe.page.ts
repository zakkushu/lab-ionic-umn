import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  arr_recipe: Recipe[];
  var_recipe: Recipe;

  constructor(private recipesService: RecipeService) { }
  
  ngOnInit() {
    this.arr_recipe = this.recipesService.getAllRecipe();
  }

  page_getRecipe(recipeId: string){
    this.var_recipe = this.recipesService.service_getRecipe(recipeId);
    console.log(this.var_recipe)
  }
}
