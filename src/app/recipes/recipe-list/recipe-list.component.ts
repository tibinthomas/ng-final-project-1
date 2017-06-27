import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  @Output() data = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  passTheData(recipe: Recipe) {
    this.data.emit(recipe);
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

}
