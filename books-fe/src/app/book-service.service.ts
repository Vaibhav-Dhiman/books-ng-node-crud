import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private readonly http: HttpClient) {}

  getBooks() {
    return this.http.get(`${environment.apiUrl}book`).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
