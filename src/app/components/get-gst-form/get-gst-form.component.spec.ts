import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGstFormComponent } from './get-gst-form.component';

describe('GetGstFormComponent', () => {
  let component: GetGstFormComponent;
  let fixture: ComponentFixture<GetGstFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetGstFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
