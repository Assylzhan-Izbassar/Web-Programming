import { Component } from '@angular/core';

import { Category, categories } from '../categories';
import {Product, products} from "../products";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categories = categories;
  selectedCategory?: Category;
  products?: Product[];

  constructor() { }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  onRemove(index: number): void {
    this.categories.forEach( category => {
      if(category == this.selectedCategory) {
        this.products = category.products.filter((product) => product.id !== index);
        category.products = this.products;
      }
    })
  }
}
