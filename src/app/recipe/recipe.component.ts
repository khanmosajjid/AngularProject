import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
   SelectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.RecipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.SelectedRecipe = recipe;
        }
      );

  }

}