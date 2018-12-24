import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class RecipeService {
  RecipeSelected = new EventEmitter<Recipe>();
  private recipe: Recipe[] = [
    new Recipe('awesome1 recipe', 'test1 recipe', 'https://images.pexels.com/photos/701786/pexels-photo-701786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),

    new Recipe('awesome2 recipe', 'test2 recipe', 'https://images.pexels.com/photos/701786/pexels-photo-701786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  ];

  getRecipe() {
    return this.recipe.slice();
  }
  constructor() {

  }
}
