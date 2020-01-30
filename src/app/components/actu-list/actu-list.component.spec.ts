import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuListComponent } from './actu-list.component';

describe('ActuListComponent', () => {
  let component: ActuListComponent;
  let fixture: ComponentFixture<ActuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
