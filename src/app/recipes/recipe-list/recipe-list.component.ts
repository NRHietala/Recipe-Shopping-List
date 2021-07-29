import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
