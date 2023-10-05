import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataFilms } from '../data-films';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  filmData: DataFilms | undefined;
  contentLoaded = true;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const apiKey = '750447c2-3f08-4a4a-b7ea-2dc529472642';
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';

    const headers = new HttpHeaders({
      'X-API-KEY': apiKey,
      'Content-Type': 'application/json',
    });

    this.http.get<DataFilms>(url, { headers: headers })
      .subscribe(
        (response) => {
          this.filmData = response;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  openFilmDetails(filmId: number) {
    this.router.navigate(['/film', filmId]);
  }
}
