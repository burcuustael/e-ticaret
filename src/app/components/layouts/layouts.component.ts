import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BasketModel } from '../../models/basket.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css',
})
export class LayoutsComponent {
  api: string = environment.api;
  baskets: BasketModel[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.getBasket();
  }

  getBasket() {
    this._http.get<any>(this.api + 'baskets').subscribe({
      next: (res) => (this.baskets = res),
      error: (err) => console.log(err),
    });
  }
}
