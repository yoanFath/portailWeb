import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuDetailComponent } from './actu-detail.component';

describe('ActuDetailComponent', () => {
  let component: ActuDetailComponent;
  let fixture: ComponentFixture<ActuDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
