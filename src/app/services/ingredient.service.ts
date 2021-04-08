import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../models/ingredient.model';
import { Menu } from '../models/menu.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private appUrl = environment.appUrl;
  private apiRecipeUrl = 'recipe';
  private apiIngridientUrl = 'ingridients';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
    constructor(private http: HttpClient) { }

    getIngredientsByRecipeId(recipeId: number): Observable<Recipe> {
      return this.http.get<Recipe>(`${this.appUrl + this.apiRecipeUrl}?id=${recipeId}`);
    }
    
    removeIngredientById(ingedientId: number): Observable<any> {
      return this.http.delete(`${this.appUrl + this.apiIngridientUrl}?id=${ingedientId}`, {responseType: 'text'});
    }

}
