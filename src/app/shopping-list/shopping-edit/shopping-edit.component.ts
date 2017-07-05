import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredients.model';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

   subscription: Subscription;
   idSelectedForEdit: number;
   isEditMode = false;
   itemSelectedForEdit: Ingredient;

   @ViewChild('f') slForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
                          this.idSelectedForEdit = index;
                          this.isEditMode = true;
                          this.itemSelectedForEdit = this.shoppingListService.getIngredientByIndex(this.idSelectedForEdit);
                          this.slForm.setValue({name: this.itemSelectedForEdit.name, amount: this.itemSelectedForEdit.price});
                         }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.isEditMode) {
      this.shoppingListService.updateIngredient(this.idSelectedForEdit, newIngredient);
    } else {
    this.shoppingListService.addIngredient(newIngredient);
  }
  this.isEditMode = false;
  this.slForm.reset();
  }

  onClear() {
  this.slForm.reset();
  this.isEditMode = false;
  }

  onDelete() {
    this.shoppingListService.onDelete(this.idSelectedForEdit);
    this.onClear();
  }
}



