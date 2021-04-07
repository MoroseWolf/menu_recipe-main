import { Recipe } from "./recipe.model";

export interface Menu {
    id?: any;
    day: string;
    name: string;
    summ_calories?: number;
    recipeSet?: Recipe[];
}