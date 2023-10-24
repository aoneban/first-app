import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataFilm } from './intrefaces';
import { APIKEY } from './data';

@Injectable({
  providedIn: 'root',
})
export class ActorsServiceService {
  private apiUrlActors =
    'https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=';

  constructor(private http: HttpClient) {}

  getActorDetails(id: string): Observable<any> {
    const url = `${this.apiUrlActors}${id}`;
    return this.http.get(url, {
      headers: {
        'X-API-KEY': APIKEY,
        'Content-Type': 'application/json',
      },
    });
  }
}
