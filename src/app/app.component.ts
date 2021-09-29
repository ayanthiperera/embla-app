import { Component } from '@angular/core';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'embla-app';
  isCollapseSidePanel: boolean = false;

  constructor(private sharedService: SharedService) {
    this.sharedService.getLeftPanelCollapsObs.subscribe(res => {
      this.isCollapseSidePanel = res;
    });
  }
}
