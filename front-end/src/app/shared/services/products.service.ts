import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  _baseUrl = "185.219.79.4"


  constructor( private http: HttpClient,) { }


  getProducts(){
    // TODO integrate with BE
    return [
      { id: 1, calories: 100, cost: 100, name: 'Філе', type: "мясо" },
      { id: 2, calories: 150, cost: 50, name: 'Ніжки', type: "мясо" },
      { id: 3, calories: 50, cost: 5, name: 'Бульба', type: "овочі" }
    ];
  }

  getProductTypes(){
    return [{ label: 'In Stock', value: 'INSTOCK' },
    { label: 'Low Stock', value: 'LOWSTOCK' },
    { label: 'Out of Stock', value: 'OUTOFSTOCK' }];
  }
}
