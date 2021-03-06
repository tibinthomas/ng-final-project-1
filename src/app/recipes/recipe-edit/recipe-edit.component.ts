import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editItemId: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((param: Params) => {
          this.editItemId = +param['id'];
          this.editMode = param['id'] != null;
          this.initForm();
        })
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);


    if (this.editMode) {
      const recipe = this.recipeService.getSelectedRecipe(this.editItemId);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup( {
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.price, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onAddNewIngredientInEditPage() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    )
  }

  onSubmit() {
    const newRecipe = new Recipe(this.recipeForm.value['name'],
                                 this.recipeForm.value['description'],
                                 this.recipeForm.value['imagePath'],
                                 this.recipeForm.value['ingredients']
                                 )
    if (this.editMode) {
      this.recipeService.updateRecipe(this.editItemId, newRecipe);
      this.onClickingCancel();
      //this.recipeService.updateRecipe(this.editItemId, this.recipeForm.value); is correct untill be keep the naming conventions
    } else {
      this.recipeService.addRecipe(newRecipe);
      this.onClickingCancel();
    }
  }

  onClickingCancel() {
    this.router.navigate(['../'], {relativeTo: this.route} )
  }

  onPressingX(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
