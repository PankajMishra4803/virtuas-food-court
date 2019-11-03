import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertCourseComponent } from './desert-course.component';

describe('DesertCourseComponent', () => {
  let component: DesertCourseComponent;
  let fixture: ComponentFixture<DesertCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesertCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
