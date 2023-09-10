import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }


  getProducts(){
    // TODO integrate with BE
    return [
      { id: 1, calories: 100, cost: 100, name: 'Філе', type: "мясо" },
      { id: 2, calories: 150, cost: 50, name: 'Ніжки', type: "мясо" },
      { id: 3, calories: 50, cost: 5, name: 'Бульба', type: "овочі" }
    ];
  }
}
