import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataFilm } from './intrefaces';
import { APIKEY } from './data';

@Injectable({
  providedIn: 'root',
})
export class OpinionsService {
  private apiUrlOpinionsOne =
    'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
  private apiUrlOpinionsTwo = '/reviews?page=1&order=DATE_DESC'

  constructor(private http: HttpClient) {}

  getOpinionDetails(id: string): Observable<any> {
    const url = `${this.apiUrlOpinionsOne}${id}${this.apiUrlOpinionsTwo}`;
    return this.http.get(url, {
      headers: {
        'X-API-KEY': APIKEY,
        'Content-Type': 'application/json',
      },
    });
  }
}
