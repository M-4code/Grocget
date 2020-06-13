import { Injectable } from '@angular/core';
import { product } from 'src/app/shared/model/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    base_url: string = environment.api;
    // httpOptions = {
    //     headers: new HttpHeaders({'Content-Type': 'application/json', 
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET'} )
    // };
    constructor(private http: HttpClient) {

    }
    getProduct(id: number): Observable<product> {
        return this.http.get<product>(this.base_url + 'product/GetProduct/'+ id/*, this.*/);
    }

    getProductList(): Observable<product[]> {
        return this.http.get<product[]>(this.base_url + 'product/GetProducts');
    }
}