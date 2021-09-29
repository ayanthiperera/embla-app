import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListAltComponent } from './movie-list-alt.component';

describe('MovieListAltComponent', () => {
  let component: MovieListAltComponent;
  let fixture: ComponentFixture<MovieListAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
