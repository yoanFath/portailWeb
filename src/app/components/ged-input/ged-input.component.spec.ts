import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GedInputComponent } from './ged-input.component';

describe('GedInputComponent', () => {
  let component: GedInputComponent;
  let fixture: ComponentFixture<GedInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GedInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
