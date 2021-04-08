import { Ingredient } from "./ingredient.model";

export interface Recipe {
    id?: any;
    name: string;
    summ_calories?: number;
    ingredient?: Ingredient[];
}