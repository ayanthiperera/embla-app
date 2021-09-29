import { Component, OnInit } from '@angular/core';
import { faChevronDown, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-list-alt',
  templateUrl: './movie-list-alt.component.html',
  styleUrls: ['./movie-list-alt.component.scss']
})
export class MovieListAltComponent implements OnInit {
  faHeart = faHeart;
  faChevronDown = faChevronDown;
  showDetails: boolean = false;
  showTopPanel: boolean = false;
  showDetailsMobile: boolean = false;
  showDetailsTab: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showHideDetails() {
    this.showDetails = !this.showDetails;
  }
  showHideDetailsMobile() {
    this.showDetailsMobile = !this.showDetailsMobile;
  }
  showHideDetailsTab() {
    this.showDetailsTab = !this.showDetailsTab;
  }
  showHideTopPanel() {
    this.showTopPanel = !this.showTopPanel;
  }

}
