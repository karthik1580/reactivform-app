import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGstFormComponent } from './add-gst-form.component';

describe('AddGstFormComponent', () => {
  let component: AddGstFormComponent;
  let fixture: ComponentFixture<AddGstFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGstFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
