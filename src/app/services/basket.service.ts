import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basket.model';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  baskets: BasketModel[] = [];
  constructor() {}
}
