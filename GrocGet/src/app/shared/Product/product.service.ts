import { Injectable } from '@angular/core';
import { product } from 'src/app/shared/model/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductServices {

    constructor(private http: HttpClient) {

    }
    getProduct(id: number): Observable<product> {
        return this.http.get<product>('/product/:id'+ id);
    }

    getProductList(): Observable<product[]> {
        return this.http.get<product[]>('/products');
    }
}