import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../models/menu.model';
import { Recipe } from '../models/recipe.model';
import { MenuService } from '../services/menu.service';
import { RecipeService } from '../services/recipe.service';

import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  dropdownList: Ingredient[] = [];
  dropdownRecipeList: Recipe[] = [];
  selectedItems: Ingredient[] = [];
  selectedRecipeItems: Recipe[] = [];
  dropdownSettings = {};

  menu: Menu = {
    name: '',
    day: '',
    
  }
  recipe: Recipe = {
    name: '',
    ingridSet: []
  }

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

    this.loadAllIngridients();
    this.loadAllRecipes();
    
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name', 
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };


  }

  onItemSelect(item: any) {
    this.selectedItems.push(this.dropdownList.find(e => e.id === item.id));
    console.log(item);
  }
  

  onRecipeSelect(item: any) {
    this.selectedRecipeItems.push(this.dropdownRecipeList.find(e => e.id === item.id));
    console.log(item);
  }
  

  addMenu(): void {
    const { name, day } = this.menuForm.value;

    let menu: Menu = {
      name, day
    };

    this.menuService.createMenu(menu).subscribe(
      data => {
        this.menu = data;
      },
      error => console.log(error)
    );
    this.menuForm.reset();
  }

  addRecipe(): void {
    const { name } = this.recipeForm.value;

    let recipe: Recipe = { name, ingridSet: [] };

    recipe.ingridSet=this.selectedItems;
    this.recipeService.createRecipe(recipe).subscribe(
      data => {
        this.recipe = data;
      },
      error => console.log(error)
    );

    this.recipeForm.reset();
  }

  loadAllIngridients(): void {

    this.recipeService.getAllIngridients().subscribe(
      data => {
        this.dropdownList = data;
      },
      error => console.log()
    );
  }

  loadAllRecipes() {
    this.recipeService.getAllRecipes().subscribe(
      data => {
        this.dropdownRecipeList = data;
      },
      error => console.log(error)
    );
  }
}
