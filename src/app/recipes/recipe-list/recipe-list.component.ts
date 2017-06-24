import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe name 1', 'Description of recipe 1', 'http://weknowyourdreams.com/image.php?pic=/images/food/food-07.jpg'),
    new Recipe('Recipe name 2', 'Description of recipe 2', 'http://weknowyourdreams.com/image.php?pic=/images/food/food-07.jpg'),
    new Recipe('Recipe name 3', 'Description of recipe 3', 'http://weknowyourdreams.com/image.php?pic=/images/food/food-07.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
