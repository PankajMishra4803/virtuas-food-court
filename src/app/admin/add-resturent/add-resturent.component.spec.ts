import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResturentComponent } from './add-resturent.component';

describe('AddResturentComponent', () => {
  let component: AddResturentComponent;
  let fixture: ComponentFixture<AddResturentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResturentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResturentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
