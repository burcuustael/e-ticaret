import { AfterContentChecked, Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BasketModel } from '../../models/basket.model';
import { HttpClient } from '@angular/common/http';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css',
})
export class LayoutsComponent implements AfterContentChecked {
  api: string = environment.api;
  baskets: BasketModel[] = [];

  constructor(private _basket: BasketService) {}
  ngAfterContentChecked(): void {
    this.getBasket();
  }

  getBasket() {
    this.baskets = this._basket.baskets;
  }
}
