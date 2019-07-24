import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const url = "http://localhost:3000/products";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  addProducts(data) {
    return this.http.post(url, data).toPromise();
  }

  uppdateProducts(){
    return 
  }
}
