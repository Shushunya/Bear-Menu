import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductCategory } from '../models/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  _baseUrl = "http://127.0.0.1:8000/"

  public _productTypes = new BehaviorSubject(null);


  constructor(private http: HttpClient,) { }


  getProducts(): Observable<Product[]> {

    let url = this._baseUrl + "api/products/";
    return this.http.get<Product[]>(url);

  }

  getProductTypes(): Observable<any> {


    let url = this._baseUrl + "api/products/";
    return this.http.options(url);
  }

  updateProduct(product){
    let url = this._baseUrl + `api/products/${product.id}/`;
    return this.http.put(url, product);
  }

  createProduct(product: Product){
    let url = this._baseUrl + 'api/products/';
    return this.http.post(url, product);
  }

  deleteProduct(product){
    let url = this._baseUrl + `api/products/${product.id}/`;
    return this.http.delete(url);
  }
}
