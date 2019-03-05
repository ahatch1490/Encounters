import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterTableSearchComponent } from './encounter-table-search.component';

describe('EncounterTableSearchComponent', () => {
  let component: EncounterTableSearchComponent;
  let fixture: ComponentFixture<EncounterTableSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterTableSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterTableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
