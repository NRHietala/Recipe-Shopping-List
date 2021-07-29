import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Upside Down Pineapple Cake',
      'Delicious cake with pineapple',
      'https://images.media-allrecipes.com/userphotos/600x600/5909188.jpg'
    ),
    new Recipe(
      'Rightside Up Pineapple Cake',
      'Delicious cake with pineapple the right way up!',
      'https://images.media-allrecipes.com/userphotos/600x600/5909188.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  constructor() {}
}
