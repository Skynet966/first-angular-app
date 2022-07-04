import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this the the test description',
      'https://recipesworld.in/wp-content/uploads/2022/02/cropped-breakfast-640x853.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
