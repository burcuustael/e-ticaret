import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basket.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  api: string = environment.api;

  baskets: BasketModel[] = [];
  
  constructor(private _http: HttpClient) {
    this.getBasket();
  }

  delete(id: number) {
    this._http.delete<any>(this.api + 'baskets/' + id).subscribe({
      next: () => this.getBasket,
      error: (err) => console.log(err),
    });
  }

  getBasket() {
    this._http.get<any>(this.api + 'baskets').subscribe({
      next: (res) => (this.baskets = res),
      error: (err) => console.log(err),
    });
  }
}
