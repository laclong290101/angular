import { Injectable } from "@angular/core";
import { Product } from "./products/product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
    api: string = 'https://60eaa29e5dd7ff0017b397ec.mockapi.io/product';
    // products = Data;
    constructor(
        private http: HttpClient
    ) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.api)
    }

    getInfo(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.api}/${id}`);
    }

    addProduct(product: any): Observable<Product> {
        return this.http.post<Product>(`${this.api}`, product);

    }
    updateProduct(product: any): Observable<Product> {
        return this.http.put<Product>(`${this.api}/${product.id}`, product);
    }
    removeProduct(id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.api}/${id}`);
    }
}


