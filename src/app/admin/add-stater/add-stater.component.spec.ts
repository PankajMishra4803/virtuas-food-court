import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaterComponent } from './add-stater.component';

describe('AddStaterComponent', () => {
  let component: AddStaterComponent;
  let fixture: ComponentFixture<AddStaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
