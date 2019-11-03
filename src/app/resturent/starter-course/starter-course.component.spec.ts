import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterCourseComponent } from './starter-course.component';

describe('StarterCourseComponent', () => {
  let component: StarterCourseComponent;
  let fixture: ComponentFixture<StarterCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
