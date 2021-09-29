import { Component, OnInit } from '@angular/core';
import { faChevronDown, faFileAlt, faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  faUserFriends = faUserFriends;
  faChevronDown = faChevronDown;
  faFileAlt = faFileAlt;
  faHome = faHome;
  isCollapse: boolean = false;
  showLinkOne: boolean = false;
  showLinkTwo: boolean = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }


  collapseSidePanel() {
    this.isCollapse = !this.isCollapse;
    this.sharedService.CollapsSidePanel(this.isCollapse);
  }
  showHideLinkOne() {
    this.showLinkOne = !this.showLinkOne;
  }
  showHideLinkTwo() {
    this.showLinkTwo = !this.showLinkTwo;
  }
}
