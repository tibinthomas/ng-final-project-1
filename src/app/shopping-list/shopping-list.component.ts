import { NgForm } from '@angular/forms/src/directives';
import { Ingredient } from './../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  onClickingItem(id: number) {
    this.shoppingListService.startedEditing.next(id);
  }

}
