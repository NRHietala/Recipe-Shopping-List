import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Upside Down Pineapple Cake',
      'Delicious cake with pineapple',
      'https://images.media-allrecipes.com/userphotos/600x600/5909188.jpg',
      [
        new Ingredient('Pineapple', 1),
        new Ingredient('Cherries', 10),
        new Ingredient('Upside Down Cake', 1),
      ]
    ),
    new Recipe(
      'Rightside Up Pineapple Cake',
      'Delicious cake with pineapple the right way up!',
      'https://images.media-allrecipes.com/userphotos/600x600/5909188.jpg',
      [
        new Ingredient('Pineapple', 1),
        new Ingredient('Cherries', 10),
        new Ingredient('Right Side Up Cake', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    // this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
