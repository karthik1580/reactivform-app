import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGstFormComponent } from './update-gst-form.component';

describe('UpdateGstFormComponent', () => {
  let component: UpdateGstFormComponent;
  let fixture: ComponentFixture<UpdateGstFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGstFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
