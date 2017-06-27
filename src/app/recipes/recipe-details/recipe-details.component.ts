import { Ingredient } from './../../shared/ingredients.model';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() currentlySelectedItem: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddingToShoppingList() {
    this.recipeService.AddIngredientsToShoppingList(this.currentlySelectedItem.ingredients);
  }
}
