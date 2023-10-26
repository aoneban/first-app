import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorPersonalService } from '../actor-personal.service';

@Component({
  selector: 'app-actor-personal',
  templateUrl: './actor-personal.component.html',
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
