import { Ingredient } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Egg', 5),
    new Ingredient('Onion', 20),
    new Ingredient('Milk', 40)
  ];

  constructor() { }

  ngOnInit() {
  }

}
