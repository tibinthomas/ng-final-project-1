import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe name 1', 'Description of recipe 1', 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg'),
    new Recipe('Recipe name 2', 'Description of recipe 2', 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg'),
    new Recipe('Recipe name 3', 'Description of recipe 3', 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg')
  ];

  @Output() data = new EventEmitter<Recipe>();

  constructor() { }

  passTheData(recipe: Recipe) {
    this.data.emit(recipe);
  }

  ngOnInit() {
  }

}
