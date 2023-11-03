import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorPersonalService } from '../actor-personal.service';

@Component({
  selector: 'app-actor-personal',
  template: `
      <div>
        <div class="container">
          <h1>{{ actorPerson.nameEn }}</h1>
          <img [src]="actorPerson.posterUrl" alt="Photo" />
          <p>Description: {{ actorPerson.profession }}</p>
          <h3>Facts:</h3>
          <ul>
            <li *ngFor="let fact of actorPerson.facts">{{ fact }}</li>
          </ul>
          <h3>Films:</h3>
            <a *ngFor="let film of actorPerson.films" [routerLink]="['/film', film.filmId]">{{ film.nameEn }}</a>
        </div>
      </div>
   `,
  styleUrls: ['./actor-personal.component.css']
})
export class ActorPersonalComponent {
  actorPerson: any;
  contentLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private ActorPersonalService: ActorPersonalService
  ) {}

  ngOnInit(): void {
    this.getActorPersonal();
  }

  getActorPersonal(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ActorPersonalService.getActorPersonal(id).subscribe((actorPerson: any) => {
          this.actorPerson = actorPerson;
        });
    }
  }

}
