import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoryService {

  API = 'https://celiobarros.eadbox.com/api';

  constructor(private http: HttpClient) { }

  fetchCategories(): Observable<any> {
    let resourceUrl = `${this.API}/categories`;
    return this.http.get(resourceUrl);
  }

  fetchCategoriesCourses(category_slug): Observable<any> {
    let resourceUrl = `${this.API}/categories/${category_slug}`;
    return this.http.get(resourceUrl);
  }

}
