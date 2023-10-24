import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrailersService } from '../trailers.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})
export class TrailersComponent implements OnInit {
  trailerData: any;
  filteredTrailers: any;
  contentLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private trailersServise: TrailersService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getTrailerDetails();
  }

  getTrailerDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.trailersServise.getTrailerDetails(id).subscribe((trailer: any) => {
        this.trailerData = trailer.items.slice(0, 15);
        this.filterTrailers();
      });
    }
  }

  filterTrailers() {
    this.filteredTrailers = this.trailerData.filter((trailer: any) => {
      return trailer.site === "YOUTUBE";
    });
  }

  getSafeURL(url: string): SafeResourceUrl {
    const videoId = url.substr(-11, 11);
    const videoURL = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }
}
