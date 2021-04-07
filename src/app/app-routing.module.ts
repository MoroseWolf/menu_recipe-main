import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeInfoComponent } from './recipe/recipe-info/recipe-info.component';
import { MenuInfoComponent } from './menu/menu-info/menu-info.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  { path: 'recipe', component: RecipeComponent, children: [] },
  { path: 'recipe/show/:id', component: RecipeInfoComponent },
  
  { path: 'menu/show/:id', component: MenuInfoComponent },
  
  { path: 'add-item/:title', component: AddItemComponent },

  { path: '**', component: MenuComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
