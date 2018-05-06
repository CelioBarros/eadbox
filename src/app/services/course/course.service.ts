import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CourseService {

  API = 'https://celiobarros.eadbox.com/api';

  constructor(private http: HttpClient) { }

  fetchCourses(): Observable<any> {
    let resourceUrl = `${this.API}/courses`;
    return this.http.get(resourceUrl);
  }

}
