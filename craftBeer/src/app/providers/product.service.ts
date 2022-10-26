import { Products } from './products';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient) { }

  private url = "http://localhost:3000/products";

  getProducts() : Observable<Products[]> {
    return this._httpClient.get<Products[]>(this.url);
  }
}
