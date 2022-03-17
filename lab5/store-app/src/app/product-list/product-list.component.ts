import {Component, EventEmitter, Input, Output} from '@angular/core';

import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products = products;
  @Input() products!: Product[];
  @Output() eventRemove = new EventEmitter();

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
