import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientService } from 'src/app/services/ingredient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css', '../../app.component.css']
})
export class RecipeInfoComponent implements OnInit {

  constructor(
    private activationRoute: ActivatedRoute,
    private ingredientService: IngredientService
  ) { }

  recipeId: number;
  ingredientsByRecipeId: Ingredient[];

  ingredients: Ingredient[] = [
    {
      id: 1, 
      name: 'Яйцо',
      calories: 60
    }
  ];

  ngOnInit(): void {
    this.activationRoute.params.subscribe(id => this.recipeId = id.id);
    this.ingredientsByRecipeId = this.ingredientService.getIngredientsByRecipeId(this.recipeId);
  }

  removeIngredient(ingredId: number): void {
    this.ingredientService.removeIngredientById(ingredId);
  }

}
