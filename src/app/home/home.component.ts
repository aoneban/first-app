import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFilms } from '../intrefaces';
import { FilmSearch } from '../intrefaces';
import { APIKEY } from '../data';
import { StartLoadService } from '../start-load.service';
import { DataSharingService } from '../data-sharing.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filmData: DataFilms | any;
  filmDataArray: any;
  contentLoaded: boolean = false;
  currentPage: number = 1;
  totalPages: number = 1;
  APIKEY: string = APIKEY;
  pagesCount: number = 1

  constructor(
    private router: Router,
    private startLoadService: StartLoadService,
    private dataSharingService: DataSharingService
    ) {}

  ngOnInit(): void {
    this.dataSharingService.searchQuery$
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((searchQuery) => {
      if (searchQuery) {
        this.dataSharingService.searchMovies(searchQuery).subscribe(
          (result) => {
            this.filmDataArray = result;
            this.filmDataArray = this.filmDataArray.films;
          },
          (error) => {
            console.error('Ошибка:', error);
          }
        );
      } else {
        this.startLoad(this.currentPage);
      }
    });
    this.dataSharingService.loadRequested.subscribe((pageNumber) => {
      this.currentPage = 1;
      this.startLoad(pageNumber);
    });
  }

  startLoad(currentPage: number) {
      this.startLoadService.getStartLoad(currentPage).subscribe((response) => {
        if (response && response.pagesCount) {
          this.totalPages = response.pagesCount;
          this.filmData = response;
          this.filmDataArray = this.filmData.films
        }
      });
    this.contentLoaded = true;
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.startLoad(this.currentPage);
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.startLoad(this.currentPage);
    }
  }

  openFilmDetails(filmId: number) {
    this.router.navigate(['/film', filmId]);
  }
}
