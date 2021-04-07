import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.component.html',
  styleUrls: ['./menu-info.component.css', '../../app.component.css']
})
export class MenuInfoComponent implements OnInit {

  constructor(
    private activationRoute: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  menuId: number;
  // getResBy id from url
  recipesByMenuId: Recipe[];

  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Яишенка',
      summ_calories: 150
    }
  ];

  ngOnInit(): void {
    this.activationRoute.params.subscribe(id => this.menuId = id.id);
    this.recipesByMenuId = this.recipeService.getRecipeByMenuId(this.menuId);
  }

  removeRecipe(recipeId: number) {
    this.recipeService.removeRecipe(recipeId);
  }

}
