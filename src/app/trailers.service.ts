import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataFilm } from './intrefaces';
import { APIKEY } from './data';

@Injectable({
  providedIn: 'root'
})
export class TrailersService {
  private apiUrlTrailersOne =
    'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
  private apiUrlTrailersTwo = '/videos'

  constructor(private http: HttpClient) {}
  getTrailerDetails(id: string): Observable<any> {
    const url = `${this.apiUrlTrailersOne}${id}${this.apiUrlTrailersTwo}`;
    return this.http.get(url, {
      headers: {
        'X-API-KEY': APIKEY,
        'Content-Type': 'application/json',
      },
    });
  }
}
