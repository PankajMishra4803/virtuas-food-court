import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainCourseComponent } from './add-main-course.component';

describe('AddMainCourseComponent', () => {
  let component: AddMainCourseComponent;
  let fixture: ComponentFixture<AddMainCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMainCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMainCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
