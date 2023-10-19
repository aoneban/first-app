import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataFilm } from './intrefaces';

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
        'X-API-KEY': '8fb3f1d4-57ae-40d8-a0e9-7e563721a82c',
        'Content-Type': 'application/json',
      },
    });
  }
}
