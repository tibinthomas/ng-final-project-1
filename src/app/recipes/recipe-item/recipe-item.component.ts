import { RecipeService } from '../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelectingItem() {
  this.recipeService.listenForActiveItem.emit(this.recipe);    
  }

}
