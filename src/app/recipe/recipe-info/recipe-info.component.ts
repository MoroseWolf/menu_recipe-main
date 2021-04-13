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
  ingredientsByRecipeId: Ingredient[] = [];


  ngOnInit(): void {
    this.activationRoute.params.subscribe(id => this.recipeId = id.id);
    this.loadIngridientsByRecipe();
  }

  loadIngridientsByRecipe(){
    this.ingredientService.getIngredientsByRecipeId(this.recipeId).subscribe(
      data => {
        this.ingredientsByRecipeId = data.ingridSet;
      },
      error => console.log(error)
    );
  }

  removeIngredient(ingredId: number) {
    this.ingredientService.removeIngredientById(ingredId).subscribe(
      data => {
        this.loadIngridientsByRecipe();
      },
      error => console.log(error)
    );
  }

}
