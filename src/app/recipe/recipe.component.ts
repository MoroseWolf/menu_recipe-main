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

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getAllRecipes().subscribe(
      data => {
        this.recipes = data;
      },
      error => console.log(error)
    );
  }

  removeRecipe(id: number): void {
    this.recipeService.removeRecipe(id).subscribe(
      error => console.log(error)
    );
  }

}
