import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorsServiceService } from '../actors-service.service';

@Component({
  selector: 'app-actors-detail',
  templateUrl: './actors-detail.component.html',
  styleUrls: ['./actors-detail.component.css'],
})
export class ActorsDetailComponent implements OnInit {
  actorData: any;
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
      this.actorServise.getActorDetails(id).subscribe((actorData: string | []) => {
          this.actorData = actorData.slice(0, 5);
        });
    }
  }
}
