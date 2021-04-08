import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from '../models/menu.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private appUrl = environment.appUrl;
  private apiMenuUrl = 'menu';
  private apiRecipeUrl = 'recipe';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

    constructor(private http: HttpClient) { }

    createRecipe(recipe: Recipe): Observable<any> {
      return this.http.post(`${this.appUrl + this.apiRecipeUrl}`, recipe, this.httpOptions);
    }

    getRecipeByMenuId(menuId: number): Observable<Menu> {
      return this.http.get<Menu>(`${this.appUrl + this.apiMenuUrl}?id=${menuId}`);
    }

    removeRecipe(recipeId: number): Observable<any>{
      return this.http.delete(`${this.appUrl + this.apiRecipeUrl}?id=${recipeId}`, {responseType: 'text'});
    }
}
