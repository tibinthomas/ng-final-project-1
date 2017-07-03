import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  currentlySelectedItem: Recipe;
  currentlySelectedItemsId: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }


  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => { this.currentlySelectedItemsId = +params['id'];
                                      this.currentlySelectedItem = this.recipeService.getSelectedRecipe(this.currentlySelectedItemsId);
                                    });
  }

  onAddingToShoppingList() {
    this.recipeService.AddIngredientsToShoppingList(this.currentlySelectedItem.ingredients);
  }

  onClickingEditRecipes() {
    this.router.navigate(['../', this.currentlySelectedItemsId, 'edit'], {relativeTo: this.route});
  }
}
