import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  // Observable user 
  showSideNavigation = new Subject<boolean>();
  collapsSidePanel = new Subject<boolean>();

  public ShowSideNavigation(value: boolean) {
    this.showSideNavigation.next(value);
  }

  get getLeftPanelHideObs(): Observable<boolean> {
    return this.showSideNavigation.asObservable();
  }

  public CollapsSidePanel(value: boolean) {
    this.collapsSidePanel.next(value);
  }

  get getLeftPanelCollapsObs(): Observable<boolean> {
    return this.collapsSidePanel.asObservable();
  }


}
