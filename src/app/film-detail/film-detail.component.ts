import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import { DataFilm } from '../intrefaces';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})
export class FilmDetailComponent implements OnInit {
  showActors: boolean = false;
  showOpinions: boolean = false;
  film: DataFilm | undefined;
  contentLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    this.getFilmDetails();
    this.contentLoaded = true;
  }

  getFilmDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.filmService.getFilmDetails(id).subscribe((film) => {
        this.film = film;
      });
    }
  }
}
