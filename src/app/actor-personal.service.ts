import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataFilm } from './intrefaces';
import { APIKEY } from './data';

@Injectable({
  providedIn: 'root'
})
export class ActorPersonalService {
  private apiUrlActorPersonal =
  'https://kinopoiskapiunofficial.tech/api/v1/staff/';

constructor(private http: HttpClient) {}

getActorPersonal(id: string): Observable<any> {
  const url = `${this.apiUrlActorPersonal}${id}`;
  return this.http.get(url, {
    headers: {
      'X-API-KEY': APIKEY,
      'Content-Type': 'application/json',
    },
  });
}
}
