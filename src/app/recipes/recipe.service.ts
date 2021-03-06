import { Subject } from 'rxjs/Rx';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredients.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
    new Recipe(
        'Recipe name 1',
        'Description of recipe 1',
        'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
            [new Ingredient('Egg', 2), new Ingredient('Pepper', 5)]
        ),
    new Recipe('Recipe name 2',
        'Description of recipe 2',
        'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
            [new Ingredient('Egg', 2), new Ingredient('Pepper', 5)]),
    new Recipe('Recipe name 3',
        'Description of recipe 3',
        'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg', 
            [new Ingredient('Egg', 2), new Ingredient('Pepper', 5)])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
        //intention of slice() here is just to pass the array by value
        //By default arrays are handled as reference in javascript 
     }

    AddIngredientsToShoppingList(ing: Ingredient[]) {
        this.shoppingListService.addIngredients(ing);
    }

    getSelectedRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

}
