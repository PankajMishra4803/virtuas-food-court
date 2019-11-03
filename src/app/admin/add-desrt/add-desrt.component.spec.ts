import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesrtComponent } from './add-desrt.component';

describe('AddDesrtComponent', () => {
  let component: AddDesrtComponent;
  let fixture: ComponentFixture<AddDesrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
