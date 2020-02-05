import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GedCardComponent } from './ged-card.component';

describe('GedCardComponent', () => {
  let component: GedCardComponent;
  let fixture: ComponentFixture<GedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
