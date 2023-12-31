import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataFilm } from './intrefaces';
import { APIKEY } from './data';

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
        'X-API-KEY': APIKEY,
        'Content-Type': 'application/json',
      },
    });
  }
}
