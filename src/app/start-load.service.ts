import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataFilm } from './intrefaces';
import { APIKEY } from './data';

@Injectable({
  providedIn: 'root'
})
export class StartLoadService {

  private apiUrl = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=`;

  constructor(private http: HttpClient) { }

  getStartLoad(page: number): Observable<DataFilm> {
    const url = `${this.apiUrl}${page}`;
    return this.http.get<DataFilm>(url, {
      headers: {
        'X-API-KEY': APIKEY,
        'Content-Type': 'application/json',
      },
    });
  }
}
