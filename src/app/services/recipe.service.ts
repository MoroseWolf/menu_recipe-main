import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    constructor() { }

    createRecipe(recipe: Recipe): void {
      
    }

    getRecipeByMenuId(menuId: number): Recipe[] {
      return [];
    }

    removeRecipe(recipeId: number): void {

    }
}
