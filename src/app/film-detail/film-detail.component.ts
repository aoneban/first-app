import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})

export class FilmDetailComponent implements OnInit {
  film: any;
  contentLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    this.getFilmDetails();
  }

  getFilmDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.filmService.getFilmDetails(id).subscribe((film) => {
        this.film = film;
        this.contentLoaded = true;
      });
    }
  }
}
