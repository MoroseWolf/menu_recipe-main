import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../models/menu.model';
import { Recipe } from '../models/recipe.model';
import { MenuService } from '../services/menu.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(
    private activationRoute: ActivatedRoute,
    private menuService: MenuService,
    private recipeService: RecipeService
  ) { }

  menuForm: FormGroup;
  recipeForm: FormGroup;

  title: string;

  ngOnInit(): void {
    this.activationRoute.params.subscribe(title => this.title = title.title);
    console.log(this.title);

    this.menuForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      day: new FormControl(null, [Validators.required])
    });

    this.recipeForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  addMenu(): void {
    const { name, day } = this.menuForm.value;

    let menu: Menu = {
      name, day
    };

    this.menuService.createMenu(menu);
    this.menuForm.reset();
  }

  addRecipe(): void {
    const { name } = this.recipeForm.value;

    let recipe: Recipe = { name };

    this.recipeService.createRecipe(recipe);
    this.recipeForm.reset();
  }
}
