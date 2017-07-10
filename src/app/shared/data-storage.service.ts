import { AuthService } from './../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';


@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService,
                private authService: AuthService) {}

    saveData() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-final-project.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    retriveData() {
        const token = this.authService.getToken();
        this.http.get('https://ng-final-project.firebaseio.com/recipes.json?auth=' + token).subscribe(
            (response: Response) => { const retrivedRecipes = response.json();
                                      this.recipeService.setRecipes(retrivedRecipes);
                                    }
        )
    }
}
