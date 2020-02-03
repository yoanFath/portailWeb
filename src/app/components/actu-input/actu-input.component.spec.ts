import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuInputComponent } from './actu-input.component';

describe('ActuInputComponent', () => {
  let component: ActuInputComponent;
  let fixture: ComponentFixture<ActuInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
