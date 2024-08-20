import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/products.model';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { environment } from '../../../environments/environment';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  api: string = environment.api;
  product: ProductModel = new ProductModel();
  products: ProductModel[] = [];

  constructor(private _http: HttpClient, private _basket: BasketService) {}

  ngOnInit(): void {
    this.urunListesiGetir();
  }

  urunListesiGetir() {
    this._http.get<any>(this.api + 'products').subscribe({
      next: (res) => (this.products = res),
      error: (err) => console.log(err),
    });
  }

  urunEkle() {
    this._http.post<any>(this.api + 'products', this.product).subscribe({
      next: (res) => {
        this.urunListesiGetir();
        this.product = new ProductModel();
      },
      error: (err) => console.log(err),
    });
  }

  sepeteEkle(model: ProductModel) {
    this._http.post<any>(this.api + 'basket', model).subscribe({
      next: () => {
        console.log('sepete eklendi'), this.getBasket();
      },
      error: (err) => console.log(err),
    });
  }

  getBasket() {
    this._http.get<any>(this.api + 'baskets').subscribe({
      next: (res) => (this._basket.baskets = res),
      error: (err) => console.log(err),
    });
  }
}
