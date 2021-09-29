import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HeaderComponent,
    PaginationComponent,
    SidePanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule

  ],
  exports: [HeaderComponent, PaginationComponent, SidePanelComponent, FormsModule]
})
export class SharedModule { }
