import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight
  constructor() { }

  ngOnInit(): void {
  }

}
