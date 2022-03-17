import { Component, Input } from '@angular/core';

import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products = products;
  @Input() products!: Product[];

  share() {
    console.log('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }

}
