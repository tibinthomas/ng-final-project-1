import { Subject } from 'rxjs/Rx';

import { Ingredient } from './../shared/ingredients.model';


export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Array<Ingredient> = [
    new Ingredient('Egg', 5),
    new Ingredient('Onion', 20),
    new Ingredient('Milk', 40)
  ];


    getIngredients() {
        return this.ingredients;
    }

    getIngredientByIndex(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ing: Ingredient[]) {
        this.ingredients.push(...ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, updateData: Ingredient) {
        this.ingredients[index] = updateData;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
