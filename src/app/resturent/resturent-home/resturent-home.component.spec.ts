import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturentHomeComponent } from './resturent-home.component';

describe('ResturentHomeComponent', () => {
  let component: ResturentHomeComponent;
  let fixture: ComponentFixture<ResturentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
