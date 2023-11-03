
import { Component, EventEmitter, Output } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() loadRequested = new EventEmitter<number>();

  searchArray: [] | undefined;
  searchQuery: string = '';

  constructor(private dataSharingService: DataSharingService) {}

  onSearchInput() {
    this.dataSharingService.setSearchQuery(this.searchQuery);
  }

  requestLoad() {
    this.searchQuery = '';
    this.dataSharingService.requestLoad(1);
  }
}
