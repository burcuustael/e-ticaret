import { Component } from '@angular/core';
import { ProductModel } from '../../models/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  product: ProductModel = new ProductModel();
  products: ProductModel[] = [];

  urunEkle() {
    this.products.push(this.product);
    this.product = new ProductModel();
  }
}
