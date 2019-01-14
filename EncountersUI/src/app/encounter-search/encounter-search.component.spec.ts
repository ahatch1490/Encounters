import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterSearchComponent } from './encounter-search.component';

describe('EncounterSearchComponent', () => {
  let component: EncounterSearchComponent;
  let fixture: ComponentFixture<EncounterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
