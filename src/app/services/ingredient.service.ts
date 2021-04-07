import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

    constructor() { }

    getIngredientsByRecipeId(recipeId: number): Ingredient[] {
      return [];
    }
    
    removeIngredientById(recipeId: number): void {
      
    }

}
