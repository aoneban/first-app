import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorsServiceService } from '../actors-service.service';
import { DataFilm } from '../data-film';

@Component({
  selector: 'app-actors-detail',
  templateUrl: './actors-detail.component.html',
  styleUrls: ['./actors-detail.component.css']
})
export class ActorsDetailComponent implements OnInit {
  film: any
  contentLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private actorServise: ActorsServiceService
  ) {}

  ngOnInit(): void {
    this.getActorDetails();
  }

  getActorDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.actorServise.getActorDetails(id).subscribe((film: string | any[]) => {
        this.film = film.slice(0, 8);
      });
    }
  }
}
