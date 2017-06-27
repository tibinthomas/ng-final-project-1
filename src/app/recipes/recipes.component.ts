import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  @Input() selectedItemData: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
