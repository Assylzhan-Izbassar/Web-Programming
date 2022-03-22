import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Product, products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products = products;
  @Input() products!: Product[];
  @Output() eventRemove = new EventEmitter();

  rating_list = [1,2,3,4,5];

  changeScore(x: number, product: Product) : void {
    product.rating = (product.rating + x) / 2;
  }

  share() {
    console.log('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }

  productLikes(product: Product): void {
    product.rating++;
  }

  removeProduct(id: number): void {
    this.eventRemove.emit(id);
  }
}
