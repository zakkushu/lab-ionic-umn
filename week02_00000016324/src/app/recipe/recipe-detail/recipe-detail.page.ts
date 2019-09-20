import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { RecipeService } from '../recipe.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(public alertController : AlertController, private activatedRoute: ActivatedRoute, private recipesSvc: RecipeService, private router: Router) { }
  
  deleteRecipe(){
    this.recipesSvc.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipe']);
  }

  async alertmessage(){
    const alert = await this.alertController.create({
        header: 'Delete Recipe',
        message: 'Are you sure you want to delete this recipe?',
        buttons: [
          {
            text: 'YES',
            handler: () => this.deleteRecipe()
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
    });
    await alert.present();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('recipeId')){return; }
        this.loadedRecipe = this.recipesSvc.getRecipe(paramMap.get('recipeId'));
      }
    );
  }

  

}
