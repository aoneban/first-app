import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpinionsService } from '../opinions.service';
import { ReviewList } from '../intrefaces';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
})
export class OpinionsComponent implements OnInit {
  expandedReviews: { [key: number]: boolean } = {};
  showFullDescription: boolean = false;
  opinionData: ReviewList | undefined;
  contentLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private opinionServise: OpinionsService
  ) {}

  ngOnInit(): void {
    this.getOpinionDetails();
  }

  getOpinionDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.opinionServise.getOpinionDetails(id).subscribe((opinionData: ReviewList | any) => {
        this.opinionData = opinionData;

        if (this.opinionData) {
          const items = this.opinionData.items;
        }
      });
    }
  }
  isExpanded(index: number): boolean {
    return this.expandedReviews[index] === true;
  }

  toggleDescription(index: number) {
    this.expandedReviews[index] = !this.expandedReviews[index];
  }
}
