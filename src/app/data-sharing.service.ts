import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { APIKEY } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private searchQuerySubject = new BehaviorSubject<string>('');
  public loadRequested = new BehaviorSubject<number>(1);
  public searchQuery$ = this.searchQuerySubject.asObservable();

  constructor(private http: HttpClient) {}

  requestLoad(pageNumber: number) {
    this.loadRequested.next(pageNumber);
  }

  setSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }

  searchMovies(keyword: string): Observable<any[]> {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}`;
    const headers = new HttpHeaders({
      'X-API-KEY': APIKEY,
      'Content-Type': 'application/json',
    });

    return this.http.get<any[]>(url, { headers });
  }
}
