import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataFilm } from './data-film';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';

  constructor(private http: HttpClient) {}

  getFilmDetails(id: string): Observable<DataFilm> {
    const url = `${this.apiUrl}${id}`;
    return this.http.get<DataFilm>(url, {
      headers: {
        'X-API-KEY': '8fb3f1d4-57ae-40d8-a0e9-7e563721a82c',
        'Content-Type': 'application/json',
      },
    });
  }

}
