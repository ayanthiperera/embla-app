import { Component, OnInit } from '@angular/core';
import { faChevronDown, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  faHeart = faHeart;
  faChevronDown = faChevronDown;
  showDetails: boolean = true;
  showTopPanel: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showHideDetails() {
    this.showDetails = !this.showDetails;
  }

  showHideTopPanel() {
    this.showTopPanel = !this.showTopPanel;
  }
}
