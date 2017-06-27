import { Ingredient } from './../shared/ingredients.model';


export class ShoppingListService {

    private ingredients: Array<Ingredient> = [
    new Ingredient('Egg', 5),
    new Ingredient('Onion', 20),
    new Ingredient('Milk', 40)
  ];


    getIngredients() {
        return this.ingredients;
    }

    editIngredients(ing: Ingredient) {
        this.ingredients.push(ing);
    }

    addIngredients(ing: Ingredient[]) {
        this.ingredients.push(...ing)
    }
}
