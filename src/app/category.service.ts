import { Injectable } from "@angular/core";
import { Category } from "./category";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CategoryService {
    api: string = 'https://60eaa29e5dd7ff0017b397ec.mockapi.io/category';
    constructor(
        private http: HttpClient
    ) { }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.api)
    }

    getInfo(id: number): Observable<Category> {
        return this.http.get<Category>(`${this.api}/${id}`);
    }

    addCategory(category: any): Observable<Category> {
        return this.http.post<Category>(`${this.api}`, category);

    }
    updateCategory(category: any): Observable<Category> {
        return this.http.put<Category>(`${this.api}/${category.id}`, category);
    }
    removeCategory(id: number): Observable<Category> {
        return this.http.delete<Category>(`${this.api}/${id}`);
    }
}


