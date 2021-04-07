import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css', '../app.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(
    private recipeService: RecipeService
  ) { }

  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Яишенка',
      summ_calories: 150
    },
    {
      id: 2,
      name: 'Паста',
      summ_calories: 60
    },
    {
      id: 3,
      name: 'Пицца',
      summ_calories: 230
    }
  ];

  ngOnInit(): void {
  }

  removeRecipe(recipe: Recipe): void {
    this.recipeService.removeRecipe(recipe.id);
  }

}
