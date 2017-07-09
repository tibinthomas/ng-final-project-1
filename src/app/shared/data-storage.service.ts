import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService) {}

    saveData() {
        return this.http.put('https://ng-final-project.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }
}
