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
        'X-API-KEY': '750447c2-3f08-4a4a-b7ea-2dc529472642',
        'Content-Type': 'application/json',
      },
    });
  }
}
