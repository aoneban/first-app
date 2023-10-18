import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataFilms } from '../data-films';
import { FilmSearch } from '../data-films';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filmData: DataFilms | undefined;
  filmDataSearch: FilmSearch | undefined;
  contentLoaded: boolean = false;
  currentPage: number = 1;
  totalPages: number = 1;
  APIKEY: string = '8fb3f1d4-57ae-40d8-a0e9-7e563721a82c';
  searchKeyword: string = ''

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const page = 1;
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`;

    const headers = new HttpHeaders({
      'X-API-KEY': this.APIKEY,
      'Content-Type': 'application/json',
    });

    this.http.get<DataFilms>(url, { headers: headers }).subscribe(
      (response) => {
        if (response && response.pagesCount) {
          this.totalPages = response.pagesCount;
          this.filmData = response;
        }
      },
      (error) => {
        console.error(error);
      }
    );
    this.contentLoaded = true;
  }

  loadFilmData() {
    let url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=`;

    if (this.searchKeyword) {
      url += `${this.searchKeyword}`;
    }

    const headers = new HttpHeaders({
      'X-API-KEY': this.APIKEY,
      'Content-Type': 'application/json',
    });

    this.http.get<FilmSearch>(url, { headers: headers })
      .subscribe(
        (response) => {
          this.filmDataSearch = response;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  searchFilms() {
    this.loadFilmData();
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePageData();
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageData();
    }
  }

  updatePageData() {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${this.currentPage}`;

    const headers = new HttpHeaders({
      'X-API-KEY': this.APIKEY,
      'Content-Type': 'application/json',
    });

    this.http.get<DataFilms>(url, { headers: headers }).subscribe(
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
